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
  userInput: any;
  map: boolean = false;
  constructor(private fetcher: FetchDataService) {}

  async ngOnInit() {
    const eventID = window.location.pathname.split("/")[2];
    this.event = await this.fetcher.fetchEvent(eventID);
    if (this.event.location.coordinates) this.map = true;
    try {
      await this.fetcher.getUserInfo();
      this.userInfo = this.fetcher.user;
      console.log(this.event);
    } catch (err) {
      if (err.status === 401) {
        this.userInfo = {
          username: " ",
          imgUrl:
            "http://www.herbeumont.be/macommune/vie-politique/conseil-communal/img/no-profile-image-png.png/image_preview"
        };
      }
    }

    this.fetcher.comment.subscribe(data => {
      const userInput = {
        author: data.author,
        imgUrl: data.imgUrl,
        content: data.content.value
      };
      this.fetcher.addAcomment(data.content.value, eventID);
      this.event.comments.push(userInput);
    });
  }

  getComment(comment: any) {
    this.userInput = comment.value;
  }
}
