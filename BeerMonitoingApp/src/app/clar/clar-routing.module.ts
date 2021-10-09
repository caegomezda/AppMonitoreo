import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClarPage } from './clar.page';

const routes: Routes = [
  {
    path: '',
    component: ClarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClarPageRoutingModule {}
