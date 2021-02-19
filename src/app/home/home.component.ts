import { Component, OnInit,ChangeDetectionStrategy } from '@angular/core';

import { AuthService, SocialUser, GoogleLoginProvider} from 'angularx-social-login'
import {ApiService} from "../core/api.service";

@Component({
  selector: 'app-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user:any=SocialUser;
  users:any=[{}];
  constructor( private authService :AuthService, private apiService : ApiService) { }

  ngOnInit(): void {
    this.authService.authState.subscribe((user)=>{
      this.user= user;
    })
  }

  signInWithGoogle() :any{
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    this.apiService.birthday(this.user.name).subscribe(data => {
    this.users=data;
      
    }
    );
  }

  signOut() :any{
    this.authService.signOut();
  }

  
}
