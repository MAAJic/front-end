import { Component, OnInit } from '@angular/core';
import { Event } from '../../models/Event';

import { EventsComponent } from "./events/events.component";


@Component({
  selector: 'app-carousels',
  templateUrl: './carousels.component.html',
  styleUrls: ['./carousels.component.scss']
})
export class CarouselsComponent implements OnInit {
  //events: EventsComponent;
  events: Event[]= [
    {
        title:"music event",
        image:"http://www.howtolistentodylan.com/wp-content/uploads/2017/08/Documentary-photography-music-events.jpg",
        price:"$50"
      },
      {
        title:"irishman movie",
        image:"https://freakingeek.com/wp-content/uploads/2019/11/TheIrishman-Banniere-800x445.png",
        price:"£40"
      },
      {
        title:"theater play",
        image:"https://www-tc.pbs.org/wnet/gperf/files/2017/11/GP_Indecent_2019.jpg",
        price:"$20"
      }
  ];

  constructor() { }

  ngOnInit() {
    
  }

}
