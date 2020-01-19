import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { NgForm } from "@angular/forms";
import { FetchDataService } from "src/app/services/fetch-data.service";

@Component({
  selector: "app-comment-component",
  templateUrl: "./comment-component.component.html",
  styleUrls: ["./comment-component.component.scss"]
})
export class CommentComponentComponent implements OnInit {
  @Input() info: any;
  @Output() comment = new EventEmitter<any>();
  content: string;
  constructor(private fetcher: FetchDataService) {}

  ngOnInit() {}
  onSubmit(form: NgForm) {
    console.log(form.value);
    const input = document.getElementById("textarea");
    // this.comment.emit(input);
    this.fetcher.comments.next({
      author: this.info.userInfo.username,
      imgUrl: this.info.userInfo.imgUrl,
      content: input
    });
  }
}
