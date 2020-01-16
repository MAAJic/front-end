import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  events = [
    {
      name: "test1",
      price: "50",
      img: "https://source.unsplash.com/random"
    },
    {
      name: "test2",
      price: "51",
      img: "https://source.unsplash.com/random"
    },
    {
      name: "test3",
      price: "52",
      img: "https://source.unsplash.com/random"
    },
    {
      name: "test4",
      price: "53",
      img: "https://source.unsplash.com/random"
    },
    {
      name: "test5",
      price: "54",
      img: "https://source.unsplash.com/random"
    },
    {
      name: "test6",
      price: "55",
      img: "https://source.unsplash.com/random"
    },
    {
      name: "test7",
      price: "56",
      img: "https://source.unsplash.com/random"
    },
    {
      name: "test8",
      price: "58",
      img: "https://source.unsplash.com/random"
    },
    {
      name: "test9",
      price: "59",
      img: "https://source.unsplash.com/random"
    },
    {
      name: "test10",
      price: "510",
      img: "https://source.unsplash.com/random"
    },
    {
      name: "test11",
      price: "511",
      img: "https://source.unsplash.com/random"
    },
    {
      name: "test7",
      price: "56",
      img: "https://source.unsplash.com/random"
    },
    {
      name: "test7",
      price: "56",
      img: "https://source.unsplash.com/random"
    },
    {
      name: "test7",
      price: "56",
      img: "https://source.unsplash.com/random"
    },
    {
      name: "test7",
      price: "56",
      img: "https://source.unsplash.com/random"
    },
    {
      name: "test7",
      price: "56",
      img: "https://source.unsplash.com/random"
    },
    {
      name: "test7",
      price: "56",
      img: "https://source.unsplash.com/random"
    },
    {
      name: "test7",
      price: "56",
      img: "https://source.unsplash.com/random"
    }
  ];
  pageOfItems: Array<any>;
  constructor() {}

  ngOnInit() {}

  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
  }
}
