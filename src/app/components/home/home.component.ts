import { Component, OnInit } from "@angular/core";
import { FetchDataService } from "../../services/fetch-data.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  events = [];
  pageOfItems: Array<any>;
  constructor(private getAllData: FetchDataService) {}

  async ngOnInit() {
    await this.getAllData.getAllEvents();
    this.getAllData.dataSource.subscribe(data => {
      console.log(data);
      this.events = data;
    });
  }

  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
  }
}
