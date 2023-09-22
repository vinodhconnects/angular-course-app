import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { MenubarComponent } from './common/menubar/menubar.component';
import { HomeComponent } from './pages/home/home.component';

import { WorkshopsComponent } from './pages/workshops/workshops.component';
import { ReachusComponent } from './pages/reachus/reachus.component';
import { ReviewComponent } from './pages/review/review.component';
import { HttpClientModule } from '@angular/common/http';
import { CourseboxComponent } from './pages/home/coursebox/coursebox.component';
import { CatpipePipe } from './pipes/catpipe.pipe';
import { CfilterPipe } from './pipes/cfilter.pipe';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    MenubarComponent,
    HomeComponent,
    WorkshopsComponent,
    ReachusComponent,
    ReviewComponent,
    CourseboxComponent,
    CatpipePipe,
    CfilterPipe,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
