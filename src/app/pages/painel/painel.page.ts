import { Component, OnInit, OnDestroy } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TicketService } from '../../services/ticket.service';
import { Subscription } from 'rxjs';

@Component({
  standalone: true,
  selector: 'app-painel',
  templateUrl: './painel.page.html',
  styleUrls: ['./painel.page.scss'],
  imports: [IonicModule, CommonModule, RouterModule],
})
export class PainelPage implements OnInit, OnDestroy {
  lastFive: any[] = [];
  private subscription?: Subscription;

  constructor(private ticketService: TicketService) {}

  ngOnInit() {
    this.subscription = this.ticketService.getLastFiveCalled().subscribe((list) => {
      this.lastFive = list;
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
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