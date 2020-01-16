import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ConnectorService {
  url: string = `http://localhost:5000/api/event/${window.location.pathname.split('/')[3]}`;
  headers: Object = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }
  GetEventData () : Observable <any> {
    return this.http.get(BaseUrl, { headers: this.headers })
  }
}
