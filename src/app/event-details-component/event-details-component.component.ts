import { Component, OnInit, Input } from '@angular/core';
import { NewEvent} from './eventClass/event';
import { map } from 'rxjs/operators';

import {ConnectorService} from '../connector.service'

@Component({
  selector: 'app-event-details-component',
  templateUrl: './event-details-component.component.html',
  styleUrls: ['./event-details-component.component.scss']
})
export class EventDetailsComponentComponent implements OnInit {

  event: any;

  constructor( private http : ConnectorService) {}

  ngOnInit() {
    this.event = Event2

    console.log(Event)

    // this.http.GetEventData().pipe(map(res => {
    //   console.log(res.json())
    //
    // }));



  }

}


var Event2 = {
    "imgUrl": "https://images.unsplash.com/photo-1578445779142-dbe979d18754?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
    "comments": ["Quo explicabo debitis necessitatibus eveniet. Dolores labore quia at aut dolor doloremque. Itaque iste iusto ut occaecati."],
    "_id": "5e209561ecd6ea532cb51e44",
    "organizerId": {
        "imgUrl": "http://www.herbeumont.be/macommune/vie-politique/conseil-communal/img/no-profile-image-png.png/image_view_fullscreen",
        "username": "test",
        "__v": 0
    },
    "eventName": "test",
    "description": "amet nulla quisque arcu libero rutrum ac lobortis vel dapibus at diam nam",
    "date": "'1/27/2018'",
    "category": " music",
    "cost": "0",
    "location": "ariana",
    "__v": 0
}

    // .subscribe((data)=>{
    //   this.event = data
    // });
