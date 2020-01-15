import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  pageOfItems: Array<any>;
  events: Array<Object>;
  constructor() {}

  ngOnInit() {
    this.events = [
      {
        name: "test1",
        price: "50",
        img:
          "https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg"
      },
      {
        name: "test2",
        price: "51",
        img:
          "https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg"
      },
      {
        name: "test3",
        price: "52",
        img:
          "https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg"
      },
      {
        name: "test4",
        price: "53",
        img:
          "https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg"
      },
      {
        name: "test5",
        price: "54",
        img:
          "https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg"
      },
      {
        name: "test6",
        price: "55",
        img:
          "https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg"
      },
      {
        name: "test7",
        price: "56",
        img:
          "https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg"
      },
      {
        name: "test8",
        price: "58",
        img:
          "https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg"
      },
      {
        name: "test9",
        price: "59",
        img:
          "https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg"
      },
      {
        name: "test10",
        price: "510",
        img:
          "https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg"
      },
      {
        name: "test11",
        price: "511",
        img:
          "https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg"
      },
      {
        name: "test7",
        price: "56",
        img:
          "https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg"
      },
      {
        name: "test7",
        price: "56",
        img:
          "https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg"
      },
      {
        name: "test7",
        price: "56",
        img:
          "https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg"
      },
      {
        name: "test7",
        price: "56",
        img:
          "https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg"
      },
      {
        name: "test7",
        price: "56",
        img:
          "https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg"
      },
      {
        name: "test7",
        price: "56",
        img:
          "https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg"
      },
      {
        name: "test7",
        price: "56",
        img:
          "https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg"
      }
    ];
  }

  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
  }
}
