import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FermPageRoutingModule } from './ferm-routing.module';

import { FermPage } from './ferm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FermPageRoutingModule
  ],
  declarations: [FermPage]
})
export class FermPageModule {}
