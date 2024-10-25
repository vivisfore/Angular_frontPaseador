import { Routes } from '@angular/router';
import { DuenioComponent } from './componentes/duenio/duenio.component';
import { DueniosComponent } from './component/duenios/duenios.component';

export const routes: Routes = [
  {
    path:"duenio/:id",
    component:DuenioComponent
  },
  {
    path:"duenios",
    component:DueniosComponent
  },
  {
    path:"duenio",
    component:DuenioComponent
  }
];
