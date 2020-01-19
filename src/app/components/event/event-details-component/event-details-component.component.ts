import { Component, OnInit } from "@angular/core";
import { NewEvent } from "./eventClass/event";
import { FetchDataService } from "src/app/services/fetch-data.service";

//could make the event variable adhere to the NewEvent interface

@Component({
  selector: "app-event-details-component",
  templateUrl: "./event-details-component.component.html",
  styleUrls: ["./event-details-component.component.scss"]
})
export class EventDetailsComponentComponent implements OnInit {
  event: any;
  userInfo: Object;
  constructor(private fetcher: FetchDataService) {}

  async ngOnInit() {
    const eventID = window.location.pathname.split("/")[2];
    this.event = await this.fetcher.fetchEvent(eventID);
    try {
      await this.fetcher.getUserInfo();
      this.userInfo = this.fetcher.user;
      console.log(this.event, this.userInfo);
    } catch (err) {
      if (err.status === 401) {
        this.userInfo = {
          username: " ",
          imgUrl:
            "http://www.herbeumont.be/macommune/vie-politique/conseil-communal/img/no-profile-image-png.png/image_preview"
        };
      }
    }
  }
}
