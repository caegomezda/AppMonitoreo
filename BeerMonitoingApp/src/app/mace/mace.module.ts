import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MacePageRoutingModule } from './mace-routing.module';

import { MacePage } from './mace.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MacePageRoutingModule
  ],
  declarations: [MacePage]
})
export class MacePageModule {}
