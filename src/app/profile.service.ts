import { Injectable } from '@angular/core';
import {Http , Headers} from '@angular/http'

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
username:string
clientid=''
clientsecret=''

  constructor(private http:Http) {
    this.username="marknesh"
  }

  getProfile(){
    return this.http.get("https://api.github.com/users/"+this.username+"?client_id="+this.clientid+"&client_secret="+this.clientsecret)
  }

}
