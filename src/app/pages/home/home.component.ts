import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  courses:any=[];
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
}
