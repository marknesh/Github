import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import {Http} from '@angular/http'
import 'rxjs/add/operator/map'
import { environment } from 'src/environments/environment';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
private username:string;

profile:any

repos:any


  constructor(private http:HttpClient) {
    this.username="marknesh"
  }


  
  getProfile(){
    return this.http.get(environment.apiUrl+this.username+"?client_id="+environment.clientid+ "&client_secret="+environment.clientsecret)
  }

  getRepo(){
    return this.http.get(environment.apiUrl +this.username+"/repos?client_id="+environment.clientid+ "&client_secret="+environment.clientsecret)
  }

  getUser(username:string){
    this.username=username


  }
  
  quoteRequest(){
    interface ApiResponse{
      profile:any
      username:string
      repos:any
    }
    let promise = new Promise((resolve,reject)=>{
      this.http.get<ApiResponse>((environment.apiUrl)+this.username+"?client_id="+environment.clientid+ "&client_secret="+environment.clientsecret)
    .toPromise().then(response=>{
        this.profile = response
       this.repos=response
       this.getProfile().subscribe(user=>{
        console.log(user);
        this.profile=user
      })

     
       
       
        resolve()
      },
      error=>{
        this.profile="error";
        this.repos="error in repo"
        

        reject(error)
      })
    })
    return promise
  }
}

