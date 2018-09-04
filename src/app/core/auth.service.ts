import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { AngularFireAuth } from "angularfire2/auth";
import { Observable } from "rxjs";
import * as firebase from 'firebase/app';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user: Observable<firebase.User>;
  private userDetails: firebase.User = null;
  authState: any = null;

  constructor(private afAuth: AngularFireAuth,
              private router: Router,
              private db: AngularFireDatabase) {
    this.afAuth.authState.subscribe((auth) => {
      this.authState = auth
    } );
    
  }
  get authenticated(): boolean {
    console.log(this.authState);
    return this.authState !== null;
  }
  get currentUser(): any {
    return this.authenticated ?this.authState : null;
  }
  signInRegular(email, password) {
    const credential = firebase.auth.EmailAuthProvider.credential( email, password );
     return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }
  signUpRegular(email, password) {
    const credential = firebase.auth.EmailAuthProvider.credential( email, password);
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password);
  }
  get currentUserObservable(): any {
    console.log("currentUserObservable",this.afAuth.auth);
    return this.afAuth.authState;
  }
  isLoggedIn() {

    // if (this.userDetails == null ) {
    //   console.log("no user data");
    //   return false;
    // } else {
    //   console.log("User is logged in!");
    //   return true;
    // }
  }
  logout() {
    this.afAuth.auth.signOut()
    .then((res) => this.router.navigate(['login']));
  }
}

export class UserCredentials {
  email: string;
  password: string;
}