import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  procesos:any = [
    "Maceración",
    "Hervido",
    "Clarificación",
    "Fermentación",
    "Cocción",
    "Almacenamiento"  
  ];
  constructor(private menu: MenuController) { }



  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }


  itemMenuSelect(fase){
    console.log('fase',fase);
  }

  itemCardSelect(fase){
    console.log('fase',fase);
  }

}
