import { Component, OnInit } from "@angular/core";
import { Event } from "../../models/Event";

@Component({
  selector: "app-carousels",
  templateUrl: "./carousels.component.html",
  styleUrls: ["./carousels.component.scss"]
})
export class CarouselsComponent implements OnInit {
  //events: EventsComponent;
  events: Event[] = [
    {
      title: "music event",
      image:
        "https://images.unsplash.com/photo-1578426187376-19bd5aeaeaa0?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
      price: "$50"
    },
    {
      title: "Coffe movie",
      image:
        "https://images.unsplash.com/photo-1577650294547-9e6889330f05?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
      price: "£40"
    },
    {
      title: "theater play",
      image:
        "https://images.unsplash.com/photo-1578317906878-e64c7a4772ee?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
      price: "$20"
    }
  ];

  constructor() {}

  ngOnInit() {}
}
