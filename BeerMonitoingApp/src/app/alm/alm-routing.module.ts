import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlmPage } from './alm.page';

const routes: Routes = [
  {
    path: '',
    component: AlmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlmPageRoutingModule {}
