import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventhomeComponent } from './eventhome/eventhome.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';
import { RegistrationComponent } from './eventhome/registration/registration.component';

const eventRoute:Routes = [
  {path:"",component: EventhomeComponent}
]

@NgModule({
  declarations: [
    EventhomeComponent,
    RegistrationComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    RouterModule.forChild(eventRoute)
  ]
})
export class EventsModule { }
