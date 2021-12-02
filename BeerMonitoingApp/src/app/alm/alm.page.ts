import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-alm',
  templateUrl: './alm.page.html',
  styleUrls: ['./alm.page.scss'],
})
export class AlmPage implements OnInit {
  dataArduino:any;
  sensorTanque:any;
  ajusteNivel:any;
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
    this.sensorTanque = this.dataArduino["S4"];

    console.log('sensorTanque',this.sensorTanque);

    this.ajusteSensorNivel()
  }


  ajusteSensorNivel(){
    this.ajusteNivel = this.sensorTanque/20;
  }

}
