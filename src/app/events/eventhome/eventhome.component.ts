import { Component,OnInit } from '@angular/core';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-eventhome',
  templateUrl: './eventhome.component.html',
  styleUrls: ['./eventhome.component.css']
})
export class EventhomeComponent implements OnInit {
  dataSource:any=[];
  displayedColumns: string[] = ['workshopname', 'date', 'address', 'venue'];
  
  constructor(private es:EventsService) {

  }
  ngOnInit() {
      this.es.getEvents().subscribe({
          next: (data:any)=> {this.dataSource=data},
          error: ()=> {this.dataSource = [] }
      })
  }
}
