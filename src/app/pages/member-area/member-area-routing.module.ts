import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MemberAreaPage } from './member-area.page';

const routes: Routes = [
  {
    path: 'area-do-membro',
    component: MemberAreaPage,
    children: [
      {
        path: 'membresia',
        loadChildren: () => import('./membership/membership.module').then( m => m.MembershipPageModule)
      },
      {
        path: 'diretoria',
        loadChildren: () => import('./direction/direction.module').then( m => m.DirectionPageModule)
      }
    ]
  },
  {
    path: '',
    redirectTo: 'membresia',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MemberAreaPageRoutingModule {}
