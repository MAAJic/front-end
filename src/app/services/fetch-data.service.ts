import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class FetchDataService {
  constructor(private http: HttpClient) {}
  data = new Subject<Array<any>>();
  dataSource = this.data.asObservable();
  events;
  async getAllEvents() {
    this.events = await this.http
      .get("http://localhost:5000/api/events/all")
      .subscribe(eventData => {
        this.events = eventData;
        console.log(eventData);
        this.data.next(eventData);
      });
  }
  renderEvents(query) {
    this.data.next(
      this.events.filter(elm => {
        for (let key in elm) {
          if (typeof elm[key] === "string") {
            if (elm[key].toLowerCase().includes(query.toLowerCase()))
              return true;
          }
        }
        return false;
      })
    );
  }
  getUser() {}
}
