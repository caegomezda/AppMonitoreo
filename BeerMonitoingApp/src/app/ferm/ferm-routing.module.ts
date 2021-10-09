import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FermPage } from './ferm.page';

const routes: Routes = [
  {
    path: '',
    component: FermPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FermPageRoutingModule {}
