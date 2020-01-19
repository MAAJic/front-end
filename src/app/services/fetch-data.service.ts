import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";

import { CreatEventComponent } from "./../components/creat-event/creat-event.component";

@Injectable({
  providedIn: "root"
})
export class FetchDataService {
  constructor(private http: HttpClient) {}
  data = new Subject<Array<Object>>();
  dataSource = this.data.asObservable();
  events: any;
  user: Object;
  async getAllEvents() {
    await this.http
      .get("http://localhost:5000/api/events/all")
      .subscribe((eventData:any) => {
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

  authentification(userInfo) {
    let uri = "/login";
    if (userInfo.username) {
      uri = "/signup";
    }
    return this.http
      .post(`http://127.0.0.1:5000/api/users${uri}`, userInfo)
      .toPromise();
  }
  async fetchEvent(eventID) {
    return await this.http
      .get(`http://localhost:5000/api/event/${eventID}`)
      .toPromise();
  }

  async attendAnEvent(eventID) {
    console.log(eventID);
    return await this.http
      .patch(`http://localhost:5000/api/profile/attendEvent`, { eventID })
      .toPromise();
  }
  creatEvent(eventData) {
    return this.http
      .post("http://localhost:5000/api/events/create", eventData)
      .subscribe(data => {});
  }

  uploadImageEvent(image) {
    return this.http
      .post("http://localhost:5000/api/events/upload-img", image)
      .subscribe(files => {
        let file = files[0];
        CreatEventComponent.uploadedFile = file;
        return file;
      });
  }
}
