import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './core/auth.service';
import { AppRoutes } from '../app/app.routes'
/*
import { AngularFireDatabase, AngularFireObject, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';
*/
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private authService: AuthService, private router: Router){
  }
  goToDashboard(){
    console.log("clicked go to dashboard");
    this.router.navigate(["dashboard"]);
  }
  goToLogin(){
    console.log('goToLogin()');
    this.router.navigate(['login']);
  }
  logout(){
    this.authService.logout();
  }
}