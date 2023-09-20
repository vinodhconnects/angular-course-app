import { Component , Input} from '@angular/core';

@Component({
  selector: 'app-coursebox',
  templateUrl: './coursebox.component.html',
  styleUrls: ['./coursebox.component.css']
})
export class CourseboxComponent {
   @Input() cimage:string="" //input directive for app-coursebox
   @Input()  cprice:string=""
   @Input() ctitle:string=""
}
