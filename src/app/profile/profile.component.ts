import { Component, OnInit } from '@angular/core';
import {ProfileService} from '../profile.service'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile:any[]
  username:string
  repos:any[]

  constructor(private profileService:ProfileService) {
this.profileService.getProfile().subscribe(user=>{
  console.log(user)
  this.profile=user
})
this.profileService.getRepo().subscribe(user=>{
  console.log(user)
  this.repos=user
})
    
   }
   getInfo(){
     this.profileService.getUser(this.username)
     
   }

  ngOnInit() {
  }

}
