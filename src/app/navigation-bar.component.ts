// navigation-bar.component.ts
import { Component, Input } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation-bar',
  standalone: true,
  imports: [IonicModule, CommonModule],
  template: `
    <ion-toolbar class="navigation-toolbar">
      <ion-segment [value]="currentPage" (ionChange)="onSegmentChange($event)">
        <ion-segment-button value="totem">
          <ion-icon name="ticket"></ion-icon>
          <ion-label>Totem</ion-label>
        </ion-segment-button>
        <ion-segment-button value="painel">
          <ion-icon name="tv"></ion-icon>
          <ion-label>Painel</ion-label>
        </ion-segment-button>
        <ion-segment-button value="atendente">
          <ion-icon name="person"></ion-icon>
          <ion-label>Atendente</ion-label>
        </ion-segment-button>
      </ion-segment>
    </ion-toolbar>
  `,
  styles: [`
    .navigation-toolbar {
      --background: var(--ion-color-light);
      border-bottom: 1px solid var(--ion-color-medium);
      padding: 8px;
    }

    ion-segment {
      --background: white;
    }

    ion-segment-button {
      --indicator-color: var(--ion-color-primary);
      --color-checked: var(--ion-color-primary);
      min-height: 50px;
      font-size: 0.9rem;

      ion-icon {
        font-size: 1.5rem;
        margin-bottom: 4px;
      }
    }

    @media (max-width: 576px) {
      ion-label {
        font-size: 0.75rem;
      }
      
      ion-icon {
        font-size: 1.2rem !important;
      }
    }
  `]
})
export class NavigationBarComponent {
  @Input() currentPage: string = 'totem';

  constructor(private router: Router) {}

  onSegmentChange(event: any) {
    const page = event.detail.value;
    this.router.navigate([`/${page}`]);
  }
}