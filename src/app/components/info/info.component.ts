import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-info",
  templateUrl: "./info.component.html",
  styleUrls: ["./info.component.scss"]
})
export class InfoComponent implements OnInit {
  @Input() userInfo: Object;
  constructor() {}

  ngOnInit() {
    console.log(this.userInfo);
  }
}
