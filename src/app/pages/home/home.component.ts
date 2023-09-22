import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  courses:any=[];
  category= [
    "Languages",
    "Databases",
    "Cloud",
    "Networking",
    "System Administration",
    "All"
  ]
  range=["<15K","15K-20K",">20K","All"]
  rselected="All"
  cselected="All"
  cnow="both"
  cvalue="All"

           constructor(private cs:CourseService){

           }
           ngOnInit() {
               this.cs.getCourse().subscribe (
                 {
                   next: (data:any)=> {
                      this.courses = data
                   },
                   error: () => {
                      this.courses = [] //not a good thing to do
                   }
                 }
               )
           }

           changed(data:string):void{
             if(data=='c'){
                this.rselected="All"
                this.cvalue=this.cselected
             }
             if(data=='p'){
                this.cselected="All"
                this.cvalue=this.rselected
              }
              this.cnow=data
           }
}
