import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent {
 loginText:string=""
 status:boolean=false
 

 constructor(private ls:LoginService,private route:Router) {
  if(this.ls.getStatus()){
    this.loginText = this.ls.getUser()+" , Logout"
    this.status=true
}
else {
    this.loginText = "Login"
}
 }



 clicked() {
     if(this.ls.getStatus())
        this.ls.logout()
     else
        this.route.navigate(['/login'])

 }
}
