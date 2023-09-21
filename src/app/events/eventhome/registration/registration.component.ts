import { Component, Input } from '@angular/core';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
 @Input() events:any

  selectedWorkshop: string="";
  name: string="";
  email: string="";
  address: string="";
  errors:string[]=[]

 constructor(private es:EventsService) {}

 submitForm() {
  let emailformat:RegExp= new RegExp("^[a-z][a-z_\.0-9]+@[a-z]+\.(com|in|net)$")
  this.errors=[]
  if(this.name==undefined || this.name.length<3 ) 
  {
      this.errors.push("Name must be three character long atleast")
  }
  if(this.address==undefined || this.address.length<10) {
    this.errors.push("address must be three character long atleast")
  }
  if(!emailformat.test(this.email))
  {
    this.errors.push("Not in email Format")
  }

  if(this.errors.length==0){
//  this.errors.push("Name must be three character long atleast")
  let data ={ 
    id: Math.floor(Math.random()*100000),
    name: this.name,
    workshop:this.selectedWorkshop,
    email: this.email,
    address: this.address
   }
   this.es.register(data).subscribe({
       next: ()=> {alert("data Saved");location.reload()},
       error: () => {alert("unable to save")}

   })
   }
  }
}

