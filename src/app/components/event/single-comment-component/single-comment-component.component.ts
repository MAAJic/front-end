import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-single-comment-component',
  templateUrl: './single-comment-component.component.html',
  styleUrls: ['./single-comment-component.component.scss']
})
export class SingleCommentComponentComponent implements OnInit {
  @Input() comment: { author: string, image: string, content:string };

  constructor() { }

  ngOnInit() {
  }

}
