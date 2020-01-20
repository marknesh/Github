import { Injectable } from '@angular/core';
import {Http , Headers} from '@angular/http';
import 'rxjs/add/operator/map'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
private username:string;
apiUrl:"https://api.github.com/users/"
clientid:'f3f4257e39d4ac33c0c9'
clientsecret:'1f2b0f0fe31d2b84218f8b7734553e9d017f27a3'


  constructor(private http:Http) {
    this.username="marknesh"
  }

  getProfile(){
    return this.http.get(this.apiUrl+this.username+"?client_id="+this.clientid+ "&client_secret="+this.clientsecret).map(res =>res.json())
  }

  getRepo(){
    return this.http.get(this.apiUrl +this.username+"/repos?client_id="+this.clientid+ "&client_secret="+this.clientsecret).map(res =>res.json())
  }

  getUser(username:string){
    this.username=username

  }

}
