import { Component, OnInit } from "@angular/core";
import { FetchDataService } from "src/app/services/fetch-data.service";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"]
})
export class ProfileComponent implements OnInit {
  userInfo: Object;
  constructor(private fetchData: FetchDataService) {}

  async ngOnInit() {
    this.userInfo = this.fetchData.getUserInfo();
    console.log(this.userInfo);
  }
}
