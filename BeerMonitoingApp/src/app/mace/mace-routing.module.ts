import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MacePage } from './mace.page';

const routes: Routes = [
  {
    path: '',
    component: MacePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MacePageRoutingModule {}
