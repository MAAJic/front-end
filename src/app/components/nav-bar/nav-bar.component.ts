import { Component, OnInit } from "@angular/core";
import { FetchDataService } from "src/app/services/fetch-data.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-nav-bar",
  templateUrl: "./nav-bar.component.html",
  styleUrls: ["./nav-bar.component.scss"]
})
export class NavBarComponent implements OnInit {
  constructor(private fetchData: FetchDataService, private router: Router) {}

  ngOnInit() {}
  search($event: any) {
    this.router.navigate(["/"]);
    this.fetchData.renderEvents($event.target.value);
  }
  logOut() {
    localStorage.setItem("token", "0");
  }
}
