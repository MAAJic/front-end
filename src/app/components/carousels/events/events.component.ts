import { Component, OnInit } from '@angular/core';
import { Event } from '../../../models/Event';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  events: Event[]; 

  constructor() { }

  ngOnInit() {
    this.events = [
      {
        title:"music event",
        image:"http://www.howtolistentodylan.com/wp-content/uploads/2017/08/Documentary-photography-music-events.jpg",
        price:"$50"
      },
      {
        title:"joker movie",
        image:"https://www.mauvais-genres.com/27765-large_default/joker-original-movie-poster-15x20-in-2019-joaquin-phoenix.jpg",
        price:"£40"
      },
      {
        title:"theater play",
        image:"https://www-tc.pbs.org/wnet/gperf/files/2017/11/GP_Indecent_2019.jpg",
        price:"$20"
      }
    ]
  }

}
