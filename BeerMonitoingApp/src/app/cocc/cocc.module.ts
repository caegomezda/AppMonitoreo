import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoccPageRoutingModule } from './cocc-routing.module';

import { CoccPage } from './cocc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoccPageRoutingModule
  ],
  declarations: [CoccPage]
})
export class CoccPageModule {}
