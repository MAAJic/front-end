import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ConnectorService {
  //url: string = `http://localhost:3000/api/events/${window.location.pathname.split('/')[3]}`;
  Testurl: string = `http://localhost:3000/api/events`;

  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }
  GetEventData () : Observable <any> {
    return this.http.get(this.Testurl, { headers: this.headers })
  }
}
