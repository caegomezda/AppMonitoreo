import { Component, OnInit } from '@angular/core';
import { ApiFakeService } from '../services/api-fake.service';

@Component({
  selector: 'app-cocc',
  templateUrl: './cocc.page.html',
  styleUrls: ['./cocc.page.scss'],
})
export class CoccPage implements OnInit {

  constructor(private apiRes : ApiFakeService) { }

  ngOnInit() {
    this.getDataSensorNivel1()
  }

  async getDataSensorNivel1(){

    let result = await this.apiRes.getSensores(1,"Sensores");
    console.log("result",result);


  }

}
