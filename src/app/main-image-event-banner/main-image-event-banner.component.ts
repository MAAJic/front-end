import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-main-image-event-banner',
  templateUrl: './main-image-event-banner.component.html',
  styleUrls: ['./main-image-event-banner.component.scss']
})
export class MainImageEventBannerComponent implements OnInit {
  @Input() banner: string
  constructor() { }

  ngOnInit() {
  }

}
