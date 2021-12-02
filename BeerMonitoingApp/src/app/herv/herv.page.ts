import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-herv',
  templateUrl: './herv.page.html',
  styleUrls: ['./herv.page.scss'],
})
export class HervPage implements OnInit {

  constructor(private apiService : ApiService) { }

  ngOnInit() {
  }


}
