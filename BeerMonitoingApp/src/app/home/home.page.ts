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
      id:"herv",
      name:"Hervido",
      icon:"../../assets/img/iconosMenu/fuego1.png"
    },
    {
      id:"clar",
      name:"Clarificación",
      icon:"../../assets/img/iconosMenu/claro.png"
    },
    {
      id:"ferm",
      name:"Fermentación",
      icon:"../../assets/img/iconosMenu/cerveza-roja.png"
    },
    {
      id:"cocc",
      name:"Cocción",
      icon:"../../assets/img/iconosMenu/maceta.png"
    },
    {
      id:"alm",
      name:"Almacenamiento",
      icon:"../../assets/img/iconosMenu/comprar.png"
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
    this.routerLinkPage(fase["id"]);
  }

  routerLinkPage(menuId){
    console.log('menuId',menuId);
    this.router.navigate([`/${menuId}`]);
  }

}
