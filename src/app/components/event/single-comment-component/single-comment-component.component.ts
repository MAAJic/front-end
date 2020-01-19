import { Component, OnInit, Input } from "@angular/core";
import { FetchDataService } from "src/app/services/fetch-data.service";

@Component({
  selector: "app-single-comment-component",
  templateUrl: "./single-comment-component.component.html",
  styleUrls: ["./single-comment-component.component.scss"]
})
export class SingleCommentComponentComponent implements OnInit {
  @Input() comment: { author: string; image: string; content: string };
  @Input() userInput: any;
  constructor() {}

  ngOnInit() {}
}
