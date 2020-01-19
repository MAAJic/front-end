import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss']
})
export class StarRatingComponent implements OnInit {
  y: number = 2;
  constructor() { }

  ngOnInit() {
  }

  onChange(e: number){
    console.log(e)
  }

}
