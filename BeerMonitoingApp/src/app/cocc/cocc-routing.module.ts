import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoccPage } from './cocc.page';

const routes: Routes = [
  {
    path: '',
    component: CoccPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoccPageRoutingModule {}
