import { Component, OnInit, Input } from "@angular/core";
import { FetchDataService } from "src/app/services/fetch-data.service";

@Component({
  selector: "app-main-image-event-banner",
  templateUrl: "./main-image-event-banner.component.html",
  styleUrls: ["./main-image-event-banner.component.scss"]
})
export class MainImageEventBannerComponent implements OnInit {
  @Input() event: any;
  constructor(private fetcher: FetchDataService) {}

  ngOnInit() {}
  async attend() {
    let userInfo = await this.fetcher.attendAnEvent(this.event._id);
    console.log("clicked", this.fetcher.user, userInfo, this.event._id);
  }
}
