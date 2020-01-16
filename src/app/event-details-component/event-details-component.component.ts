import { Component, OnInit, Input } from '@angular/core';
import { NewEvent} from './eventClass/event';
import { Observable } from 'rxjs';
import {ConnectorService} from '../connector.service'

@Component({
  selector: 'app-event-details-component',
  templateUrl: './event-details-component.component.html',
  styleUrls: ['./event-details-component.component.scss']
})
export class EventDetailsComponentComponent implements OnInit {

  event: NewEvent;


  constructor( private http : ConnectorService) {}

  ngOnInit() {
    console.log(this.http.GetEventData());
  }

}
