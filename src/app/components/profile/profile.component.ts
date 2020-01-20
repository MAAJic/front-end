import { Component, OnInit } from "@angular/core";
import { FetchDataService } from "src/app/services/fetch-data.service";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"]
})
export class ProfileComponent implements OnInit {
  userInfo: any;
  constructor(private fetchData: FetchDataService) {}
  logged: Boolean;
  upcommingEvents = [];
  previousEvents = [];
  async ngOnInit() {
    let path = window.location.pathname.split("/");
    if (path.length === 3) {
      this.userInfo = await this.fetchData.getProfile(path[2]);
      this.sortEvent();
      this.logged = true;
    } else {
      try {
        await this.fetchData.getUserInfo();
        this.userInfo = this.fetchData.user;
        this.logged = true;
        this.sortEvent();
      } catch (err) {
        console.log({ err });
        this.logged = false;
      }
    }
  }
  sortEvent() {
    let attendedEvents: any = this.userInfo.attendedEvents;
    let today = new Date().toLocaleDateString().split("/");
    console.log(today, attendedEvents);
    attendedEvents.forEach(elm => {
      if (elm.date) {
        let date = elm.date.split("-");
        if (parseInt(date[0]) > parseInt(today[2])) {
          this.upcommingEvents.push(elm);
        } else if (
          parseInt(date[1]) > parseInt(today[1]) &&
          parseInt(date[2]) >= parseInt(today[2])
        ) {
          this.upcommingEvents.push(elm);
        } else if (
          parseInt(date[1]) >= parseInt(today[1]) &&
          parseInt(date[0]) >= parseInt(today[0]) &&
          parseInt(date[2]) >= parseInt(today[2])
        ) {
          this.upcommingEvents.push(elm);
        } else {
          this.previousEvents.push(elm);
        }
      }
    });
  }
}
