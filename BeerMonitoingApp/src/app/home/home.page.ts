import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  procesos:any = [
    {
      id:"mace",
      name:"Maceración",
      icon:"../../assets/img/iconosMenu/cilindro1.png"
    },
    {
      name:"Hervido",
      icon:"../../assets/img/iconosMenu/fuego1.png"
    },
    {
      name:"Clarificación",
    icon:"icon3"
    },
    {
      name:"Fermentación",
      icon:"icon4"
    },
    {
      name:"Cocción",
      icon:"icon5"
    },
    {
      name:"Almacenamiento",
      icon:"icon6"
    }  
  ];

  constructor(private menu: MenuController,
              private router : Router) { }



  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }


  itemMenuSelect(fase){
    console.log('fase1',fase);
  }

  itemCardSelect(fase){
    console.log('fase2',fase);
    this.routerLinkPage(fase["id"]);
  }

  routerLinkPage(menuId){
    console.log('menuId',menuId);
    this.router.navigate([`/${menuId}`]);
  }

}
