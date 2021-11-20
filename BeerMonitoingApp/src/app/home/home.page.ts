import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, MenuController } from '@ionic/angular';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial/ngx';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  procesos:any = [
    // {
    //   id:"mace",
    //   name:"Maceración",
    //   icon:"../../assets/img/iconosMenu/cilindro1.png"
    // },
    {
      id:"cocc",
      name:"Cocción",
      icon:"../../assets/img/iconosMenu/maceta.png"
    },
    // {
    //   id:"herv",
    //   name:"Hervido",
    //   icon:"../../assets/img/iconosMenu/fuego1.png"
    // },
    {
      id:"ferm",
      name:"Fermentación",
      icon:"../../assets/img/iconosMenu/cerveza-roja.png"
    },
    {
      id:"clar",
      name:"Clarificación",
      icon:"../../assets/img/iconosMenu/claro.png"
    },
    {
      id:"alm",
      name:"Almacenamiento",
      icon:"../../assets/img/iconosMenu/comprar.png"
    }  
  ];

  Device:any;

  constructor(private menu: MenuController,
              private router : Router,
              private bluetoothSerial : BluetoothSerial,
              private alertController : AlertController) { }



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

  async AvtivarBluetooth(){
    await this.bluetoothSerial.isEnabled().then(
      res =>{
        this.isEnable("IsOn");
        this.listDivice()
        console.log('this.Divice',this.Device);
        console.log('res',res);
      },
      err => {
        this.isEnable("IsOff");
        console.log('err',err);
      }
    )  
  }

  listDivice(){
    this.bluetoothSerial.list().then(
      res => {
        this.Device = res;
      },
      err =>{
        console.log('err',err);
      }
    )
  }
  connect(elementAddres){
    this.bluetoothSerial.connect(elementAddres).subscribe(
      succes => {
        this.deviceConnected()
      },
      error=>{
        console.log('error',error);
      }
    )
  }

  deviceConnected(){
    this.bluetoothSerial.subscribe('/n').subscribe(
      succes => {
        this.bluetoothHanldler(succes);
      }
    )
  }

  bluetoothHanldler(value){
    console.log('value',value);
  }

  setData(){
    this.bluetoothSerial.write("7").then(
      res =>{
        console.log('res',res);
        console.log('Ok');
      },
      err =>{
        console.log('err',err);
      }
    )
  }

  deviceDisconnected(){
    this.bluetoothSerial.disconnect();
    console.log("Divice Disconected");
  }

  async isEnable(messg){
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      message: messg,
      buttons: [
        {
          text:"Ok",
          handler:()=>{
            console.log('Okey');
          }
        }
      ]
    });

    await alert.present();
  }


}
