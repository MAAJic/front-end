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
  logged: Boolean;
  async ngOnInit() {
    try {
      await this.fetchData.getUserInfo();
      this.userInfo = this.fetchData.user;
      this.logged = true;
    } catch (err) {
      this.logged = false;
    }
  }
}
