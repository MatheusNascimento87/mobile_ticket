import { Routes } from '@angular/router';
import { AtendentePage } from './pages/atendente/atendente.page';
import { PainelPage } from './pages/painel/painel.page';
import { TotemPage } from './pages/totem/totem.page';


export const routes: Routes = [
  {
    path: '',
    redirectTo: 'totem',
    pathMatch: 'full',
  },
  {
    path: 'atendente',
    component: AtendentePage,
  },
  {
    path: 'painel',
    component: PainelPage,
  },
  {
    path: 'totem',
    component: TotemPage,
  },
];
