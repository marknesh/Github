import { Component, OnInit } from '@angular/core';
import {ProfileService} from '../profile.service'
import {User} from '../user'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile:any
  username:string
  repos:any

  constructor(private profileService:ProfileService) {

    
   }


   getInfo(){
     this.profileService.getUser(this.username);
     this.profileService.getProfile().subscribe(user=>{
      console.log(user);
      this.profile=user
    })
    this.profileService.getRepo().subscribe(user=>{
      console.log(user)
      this.repos=user
    })
     
   }

  ngOnInit() {
    this.profileService.quoteRequest()
  }

}
