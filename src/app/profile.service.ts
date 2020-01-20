import { Injectable } from '@angular/core';
import {Http , Headers} from '@angular/http';
import 'rxjs/add/operator/map'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
private username:string


  constructor(private http:Http) {
    this.username="marknesh"
  }

  getProfile(){
    return this.http.get(environment.apiUrl+this.username+"?client_id="+environment.clientid+ "&client_secret="+environment.clientsecret).map(res =>res.json())
  }

  getRepo(){
    return this.http.get(environment.apiUrl +this.username+"/repos?client_id="+environment.clientid+ "&client_secret="+environment.clientsecret).map(res =>res.json())
  }

  getUser(username:string){
    this.username=username

  }

}
