import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TicketService } from '../../services/ticket.service';
import { TicketType } from 'src/app/models/ticket';
import { Subscription, interval } from 'rxjs';

@Component({
  standalone: true,
  selector: 'app-totem',
  templateUrl: './totem.page.html',
  styleUrls: ['./totem.page.scss'],
  imports: [IonicModule, CommonModule, RouterModule],
})
export class TotemPage {
  lastTicket: any = null;

  constructor(private ticketService: TicketService) {}

  emit(type: TicketType) {
    this.lastTicket = this.ticketService.generateTicket(type);
  }

  getTicketColor(type: string): string {
    switch (type) {
      case 'SP':
        return 'danger';
      case 'SG':
        return 'primary';
      case 'SE':
        return 'success';
      default:
        return 'medium';
    }
  }

  getTicketTypeName(type: string): string {
    switch (type) {
      case 'SP':
        return 'Prioritária';
      case 'SG':
        return 'Geral';
      case 'SE':
        return 'Retirada de Exames';
      default:
        return type;
    }
  }

  getAverageTime(type: string): string {
    switch (type) {
      case 'SP':
        return '10-20 minutos';
      case 'SG':
        return '2-8 minutos';
      case 'SE':
        return 'Menos de 1 minuto';
      default:
        return 'Variável';
    }
  }
}