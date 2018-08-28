import { Component } from '@angular/core';

@Component({
    selector: 'pm-home-login',
    templateUrl: './home-login.component.html'
})
export class LoginAuth {
    pageTitle: string = "Login Window";
    userEmail: string = "";
    userPass: string = "";

    login(email: string, pass: string){
        this.pageTitle = email + " -login- " + pass;
    }
    signup(email: string, pass: string){
        this.pageTitle = email + " -signup- " + pass;
    }
}
