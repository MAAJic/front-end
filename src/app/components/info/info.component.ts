import { Component, OnInit, Input } from "@angular/core";
import { format } from "url";

@Component({
  selector: "app-info",
  templateUrl: "./info.component.html",
  styleUrls: ["./info.component.scss"]
})
export class InfoComponent implements OnInit {
  @Input() userInfo: any;
  constructor() {}

  ngOnInit() {}
}
