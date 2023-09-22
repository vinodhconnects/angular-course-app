import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email: string="";
  password: string="";
  constructor(private ls:LoginService,private route:Router) {}
  signIn() {
    // Handle sign-in logic here
       if(this.email && this.password) {
           let obj={email:this.email, password: this.password}
           this.ls.login(obj).subscribe(
              {
                 next: (data:any)=> {
                      if(data.user) {
                        this.ls.setLogin(data.user.username,data.accessToken)
                        
                      }
                      else {
                        alert("something Wrong")
                      }
                 }, 
                error: () => {
                     alert("Invalid credentials") 
                 }
              }
           )
       }
       else {
          alert("fill username and password properly")
       }
  }
}
