import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserCredentials } from '../../core/auth.service'
import { AuthService } from '../../core/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  public credentials : UserCredentials;
  constructor(private authService: AuthService, private router: Router) {
    this.credentials = new UserCredentials();
    
  }
    signInWithEmail() {
      this.authService.signInRegular(this.credentials.email, this.credentials.password)
        .then((res) => {
          console.log(res);
          this.router.navigate(['dashboard']);
        })
        .catch((err) => console.log('error: ' + err));
    }
    signUpWithEmail() {
      this.authService.signUpRegular(this.credentials.email, this.credentials.password)
      .then((res) => {
        console.log(res);
        this.router.navigate(['dashboard']);
      })
      .catch((err) => console.log('error: ' + err));
    }
  ngOnInit() {
  }
}