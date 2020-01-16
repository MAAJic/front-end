import { Component, OnInit, Input } from '@angular/core';
import { NewEvent} from './eventClass/event';
import {ConnectorService} from '../connector.service.ts'

@Component({
  selector: 'app-event-details-component',
  templateUrl: './event-details-component.component.html',
  styleUrls: ['./event-details-component.component.scss']
})
export class EventDetailsComponentComponent implements OnInit {

  event: NewEvent;


  constructor( private http : ConnectorService) {}

  ngOnInit() {
    this.event = this.http.GetEventData;
  }

}

// this.event.comments = [{author:`Caroline Horwitz` , image: `https://mdbootstrap.com/img/Photos/Avatars/img(30).jpg`, content:`At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
// atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa
// officia deserunt mollitia animi, id est laborum et dolorum fuga.`}]
