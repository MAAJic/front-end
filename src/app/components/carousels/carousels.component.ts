import { Component, OnInit, Input } from "@angular/core";
import { Event } from "../../models/Event";

@Component({
  selector: "app-carousels",
  templateUrl: "./carousels.component.html",
  styleUrls: ["./carousels.component.scss"]
})
export class CarouselsComponent implements OnInit {
  @Input() upcommingEvents: any;
  @Input() previousEvents: any;
  //events: EventsComponent;
  events: any;
  display: boolean;
  msg: string;
  constructor() {}

  ngOnInit() {
    if (this.upcommingEvents) {
      this.events = this.upcommingEvents;
      this.upcommingEvents.length
        ? (this.display = true)
        : (this.display = false);
    } else {
      this.previousEvents.length
        ? (this.display = true)
        : (this.display = false);
      this.events = this.previousEvents;
    }
    console.log(this.previousEvents, this.upcommingEvents);
  }
}
