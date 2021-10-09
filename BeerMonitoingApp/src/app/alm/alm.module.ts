import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlmPageRoutingModule } from './alm-routing.module';

import { AlmPage } from './alm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlmPageRoutingModule
  ],
  declarations: [AlmPage]
})
export class AlmPageModule {}
