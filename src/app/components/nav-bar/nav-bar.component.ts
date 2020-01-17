import { Component, OnInit } from "@angular/core";
import { FetchDataService } from "src/app/services/fetch-data.service";

@Component({
  selector: "app-nav-bar",
  templateUrl: "./nav-bar.component.html",
  styleUrls: ["./nav-bar.component.scss"]
})
export class NavBarComponent implements OnInit {
  constructor(private fetchData: FetchDataService) {}

  ngOnInit() {}
  search($event) {
    this.fetchData.renderEvents($event.target.value);
  }
  logOut() {
    localStorage.setItem("token", 0);
  }
}
