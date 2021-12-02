import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { environment } from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiURL = environment.urlConfing.APIURL
  private  httpOptions:any= { headers: new HttpHeaders({ 'Content-Type':  'application/json'}) };

  constructor(public http:HttpClient,
              private storage : StorageService) { }

  // async fetchUserInfo2Api(credential){
  //   let uid = credential["uid"];
  //   console.log('uid',uid);
  //   let accessToken = credential["token"]
  //   const apiUrl = `${this.apiURL}${uid}.json?auth=${accessToken}`;
  //   console.log('apiUrl',apiUrl);
  //   let json = {}
  //   json = JSON.stringify(json);
  //   return this.http.get(`${apiUrl}`, json).pipe(map( data => data)).toPromise();
  // }

  // async getData(dataJson){
  //   let data = [];
  //   for (let key in dataJson) {
  //     data = dataJson[key] 
  //   }
  //   return data
  // }

  // async getAccountData(){
  //   let credential = {
  //     uid:  await this.storage.getIdUser(),
  //     token:  await this.storage.getToken()
  //   }
  //   console.log('credential',credential);
  //   let result  = await this.fetchUserInfo2Api(credential);
  //   let data = await this.getData(result)

  //   return data
  // }

  async getArduinoData(){
    const apiUrl = `${this.apiURL}.json`;
    let json = {};
    json = JSON.stringify(json);
    return this.http.get(`${apiUrl}`, json).pipe(map( data => data)).toPromise();
  }
}
