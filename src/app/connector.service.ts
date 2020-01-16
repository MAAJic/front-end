import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ConnectorService {
  url: string = `http://localhost:3000/api/event/${window.location.pathname.split('/')[3]}`;
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }
  GetEventData () : Observable <any> {
    return this.http.get(this.url, { headers: this.headers })
  }
}
