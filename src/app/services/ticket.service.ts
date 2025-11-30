import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { TicketType } from '../models/ticket';

interface Ticket {
  id: string;
  type: TicketType;
  number: number;
  timestamp: Date;
  status: 'waiting' | 'called' | 'completed';
  desk?: number;
}

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  private readonly STORAGE_KEY = 'tickets_queue';
  private readonly CALLED_KEY = 'tickets_called';
  private readonly COUNTERS_KEY = 'tickets_counters';
  
  private lastFiveCalledSubject = new BehaviorSubject<any[]>([]);

  constructor() {
    this.initializeStorage();
    this.loadLastFiveCalled();
    
    // Escuta mudanças no localStorage de outras abas/páginas
    window.addEventListener('storage', (event) => {
      if (event.key === this.CALLED_KEY) {
        this.loadLastFiveCalled();
      }
    });
  }

  private initializeStorage(): void {
    if (!localStorage.getItem(this.STORAGE_KEY)) {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify([]));
    }
    if (!localStorage.getItem(this.CALLED_KEY)) {
      localStorage.setItem(this.CALLED_KEY, JSON.stringify([]));
    }
    if (!localStorage.getItem(this.COUNTERS_KEY)) {
      localStorage.setItem(this.COUNTERS_KEY, JSON.stringify({
        SP: 0,
        SG: 0,
        SE: 0
      }));
    }
  }

  private getQueue(): Ticket[] {
    const data = localStorage.getItem(this.STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  }

  private saveQueue(queue: Ticket[]): void {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(queue));
  }

  private getCalled(): any[] {
    const data = localStorage.getItem(this.CALLED_KEY);
    return data ? JSON.parse(data) : [];
  }

  private saveCalled(called: any[]): void {
    localStorage.setItem(this.CALLED_KEY, JSON.stringify(called));
    // Dispara evento para atualizar outras abas
    window.dispatchEvent(new StorageEvent('storage', {
      key: this.CALLED_KEY,
      newValue: JSON.stringify(called)
    }));
  }

  private getCounters(): { [key: string]: number } {
    const data = localStorage.getItem(this.COUNTERS_KEY);
    return data ? JSON.parse(data) : { SP: 0, SG: 0, SE: 0 };
  }

  private saveCounters(counters: { [key: string]: number }): void {
    localStorage.setItem(this.COUNTERS_KEY, JSON.stringify(counters));
  }

  generateTicket(type: TicketType): any {
    const counters = this.getCounters();
    counters[type]++;
    this.saveCounters(counters);

    const ticket: Ticket = {
      id: `${type}-${counters[type]}`,
      type: type,
      number: counters[type],
      timestamp: new Date(),
      status: 'waiting'
    };

    const queue = this.getQueue();
    queue.push(ticket);
    this.saveQueue(queue);

    return {
      type: ticket.type,
      number: ticket.number,
      id: ticket.id
    };
  }

  callNext(type: TicketType, desk: number): any {
    const queue = this.getQueue();
    
    // Busca a primeira senha do tipo solicitado que está aguardando
    const ticketIndex = queue.findIndex(
      t => t.type === type && t.status === 'waiting'
    );

    if (ticketIndex === -1) {
      return null;
    }

    const ticket = queue[ticketIndex];
    ticket.status = 'called';
    ticket.desk = desk;
    
    this.saveQueue(queue);

    // Adiciona aos chamados recentes
    const called = this.getCalled();
    const calledTicket = {
      type: ticket.type,
      number: ticket.number,
      desk: desk,
      timestamp: new Date()
    };
    
    called.unshift(calledTicket);
    
    // Mantém apenas os últimos 5
    if (called.length > 5) {
      called.pop();
    }
    
    this.saveCalled(called);
    this.loadLastFiveCalled();

    return calledTicket;
  }

  private loadLastFiveCalled(): void {
    const called = this.getCalled();
    this.lastFiveCalledSubject.next(called);
  }

  getLastFiveCalled(): Observable<any[]> {
    return this.lastFiveCalledSubject.asObservable();
  }

  getWaitingCount(type: TicketType): number {
    const queue = this.getQueue();
    return queue.filter(t => t.type === type && t.status === 'waiting').length;
  }

  clearAll(): void {
    localStorage.removeItem(this.STORAGE_KEY);
    localStorage.removeItem(this.CALLED_KEY);
    localStorage.removeItem(this.COUNTERS_KEY);
    this.initializeStorage();
    this.loadLastFiveCalled();
  }
}