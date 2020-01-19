import { Component, OnInit, Input } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-comment-component",
  templateUrl: "./comment-component.component.html",
  styleUrls: ["./comment-component.component.scss"]
})
export class CommentComponentComponent implements OnInit {
  @Input() info: any;
  content: string;
  constructor() {}

  ngOnInit() {}
  onSubmit(form: NgForm) {
    console.log(form.value);
    console.log(document.getElementById("textarea"));
  }
}
