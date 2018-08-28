import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from "angularfire2/auth";
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(private angularAuth: AngularFireAuth) { }

    ngOnInit() {
    }

    login(){
      this.angularAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(res =>{
        console.log('user info is ', res);
      });
    }
}
