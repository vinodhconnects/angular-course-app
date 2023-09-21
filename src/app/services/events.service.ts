import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  httpOptions:any


  constructor(private http:HttpClient) { }

  getEvents():Observable<any> {
     return this.http.get("http://localhost:4500/events")
  }

  register(obj:any):Observable<any> {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })}
      return this.http.post("http://localhost:4500/applications",obj,this.httpOptions)
    }
  }
