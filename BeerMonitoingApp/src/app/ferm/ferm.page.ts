import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-ferm',
  templateUrl: './ferm.page.html',
  styleUrls: ['./ferm.page.scss'],
})
export class FermPage implements OnInit {
  dataArduino:any;
  sensorTanque:any;
  resistencia:any;
  temperatura:any;
  bomba:any;
  ajusteNivel:any;
  estadoResistencia:boolean;
  estadoBomba:boolean;

  constructor(private apiService : ApiService) { }

  ngOnInit() {
    this.getData()
  }

  ionViewWillEnter(){
    this.getData();
  }

  async getData(){
    let result  = await this.apiService.getArduinoData()
    this.dataArduino = result
    this.getCurrentSensor()
    console.log('result',result);
  }

  async getCurrentSensor(){
    this.sensorTanque = this.dataArduino["S3"];
    // this.resistencia = this.dataArduino["A1"];
    // this.temperatura = this.dataArduino["S5"];
    this.bomba = this.dataArduino["A4"];

    console.log('sensorTanque',this.sensorTanque);
    // console.log('resistencia',this.resistencia);
    // console.log('temperatura',this.temperatura);
    // console.log('bomba',this.bomba);

    this.ajusteSensorNivel()
    // this.ajusteTemp();
    this.ajusteBomba();
  }


  ajusteSensorNivel(){
    this.ajusteNivel = this.sensorTanque/20;
  }

  // ajusteTemp(){
  //   console.log('this.estadoResistencia',this.estadoResistencia);
  //   if(this.resistencia === "1"){
  //     this.estadoResistencia = true
  //   }else{
  //     this.estadoResistencia = false
  //   }
  // }
  
  ajusteBomba(){
    console.log('this.estadoBomba',this.estadoBomba);
    if(this.bomba === "1"){
      this.estadoBomba = true
    }else{
      this.estadoBomba = false
    }
  }

}
