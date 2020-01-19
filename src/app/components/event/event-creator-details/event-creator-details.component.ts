import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-event-creator-details",
  templateUrl: "./event-creator-details.component.html",
  styleUrls: ["./event-creator-details.component.scss"]
})
export class EventCreatorDetailsComponent implements OnInit {
  @Input() creator: string;
  constructor() {}

  ngOnInit() {}
}
