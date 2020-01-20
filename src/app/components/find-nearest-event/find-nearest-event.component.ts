import {  NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { FetchDataService } from "src/app/services/fetch-data.service";

@Component({
  selector: 'app-find-nearest-event',
  templateUrl: './find-nearest-event.component.html',
  styleUrls: ['./find-nearest-event.component.scss']
})
export class FindNearestEventComponent implements OnInit {
  constructor(private fetchData: FetchDataService) { }
  events: any = []
  pageOfItems: Array<any>;
  ngOnInit() {
  }

  async search(form: NgForm) {
    if(form.value.address && form.value.maxDistance && form.value.category){
      this.events = await this.fetchData.findNearest({...form.value});
      form.reset();
    } else {
      alert('Please fill all of the fields');
    }

  }

  onChangePage(pageOfItems: Array<any>) {
    this.pageOfItems = pageOfItems;
  }
 
}
