import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-clar',
  templateUrl: './clar.page.html',
  styleUrls: ['./clar.page.scss'],
})
export class ClarPage implements OnInit {
  dataArduino:any;
  sensorTanque:any;
  motor:any;
  temperatura:any;
  bomba:any;
  ajusteNivel:any;
  estadoMotor:boolean;
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
    this.sensorTanque = this.dataArduino["S2"];
    this.motor = this.dataArduino["A5"];
    this.bomba = this.dataArduino["A3"];

    console.log('sensorTanque',this.sensorTanque);
    console.log('motor',this.motor);
    console.log('bomba',this.bomba);

    this.ajusteSensorNivel()
    this.ajusteTemp();
    this.ajusteBomba();
  }


  ajusteSensorNivel(){
    this.ajusteNivel = this.sensorTanque/20;
  }

  ajusteTemp(){
    console.log('this.estadoResistencia',this.estadoMotor);
    if(this.motor === "1"){
      this.estadoMotor = true
    }else{
      this.estadoMotor = false
    }
  }
  
  ajusteBomba(){
    console.log('this.estadoBomba',this.estadoBomba);
    if(this.bomba === "1"){
      this.estadoBomba = true
    }else{
      this.estadoBomba = false
    }
  }

}
