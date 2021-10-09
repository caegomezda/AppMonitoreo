import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HervPage } from './herv.page';

const routes: Routes = [
  {
    path: '',
    component: HervPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HervPageRoutingModule {}
