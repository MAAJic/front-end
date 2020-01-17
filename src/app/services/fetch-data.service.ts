import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class FetchDataService {
  constructor(private http: HttpClient) {}
  data = new Subject<Array<any>>();
  dataSource = this.data.asObservable();
  events: dany;
  user: Object;
  async getAllEvents() {
    this.events = await this.http
      .get("http://localhost:5000/api/events/all")
      .subscribe(eventData => {
        this.events = eventData;
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

  storeToken(token) {
    localStorage.setItem("token", token);
  }
  async getUserInfo() {
    this.user = await this.http
      .get("http://localhost:5000/api/profile/user")
      .toPromise();
  }
}
