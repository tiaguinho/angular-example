import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'client', loadChildren: './client/client.module#ClientModule' },
];
