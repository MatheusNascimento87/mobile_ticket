import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TicketService } from '../../services/ticket.service';
import { TicketType } from 'src/app/models/ticket';

@Component({
  standalone: true,
  selector: 'app-atendente',
  templateUrl: './atendente.page.html',
  styleUrls: ['./atendente.page.scss'],
  imports: [IonicModule, CommonModule, FormsModule, RouterModule],
})
export class AtendentePage {
  desk: number = 1;
  lastCalled: any = null;

  constructor(private ticketService: TicketService) {}

  call(type: TicketType) {
    if (!this.desk || this.desk < 1) {
      alert('Por favor, informe um número de guichê válido.');
      return;
    }

    this.lastCalled = this.ticketService.callNext(type, this.desk);
    
    if (!this.lastCalled) {
      alert(`Não há senhas do tipo ${this.getTicketTypeName(type)} aguardando atendimento.`);
    }
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
}