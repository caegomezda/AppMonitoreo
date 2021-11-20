import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiFakeService {
  private url = environment.URL;
  constructor() { }

  async getSensores(id,element){
    let res = await fetch(`${this.url}${element}/${id}`);
    console.log("res",res)
    return res
  }
}
