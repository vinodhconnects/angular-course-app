import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { MenubarComponent } from './common/menubar/menubar.component';
import { HomeComponent } from './pages/home/home.component';
import { EventsComponent } from './pages/events/events.component';
import { WorkshopsComponent } from './pages/workshops/workshops.component';
import { ReachusComponent } from './pages/reachus/reachus.component';
import { ReviewComponent } from './pages/review/review.component';
import { HttpClientModule } from '@angular/common/http';
import { CourseboxComponent } from './pages/home/coursebox/coursebox.component';

@NgModule({
  declarations: [
    AppComponent,
    MenubarComponent,
    HomeComponent,
    EventsComponent,
    WorkshopsComponent,
    ReachusComponent,
    ReviewComponent,
    CourseboxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
