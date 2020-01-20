import { NgForm } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { FetchDataService } from "src/app/services/fetch-data.service";

@Component({
  selector: "app-creat-event",
  templateUrl: "./creat-event.component.html",
  styleUrls: ["./creat-event.component.scss"],
  providers: []
})
export class CreatEventComponent implements OnInit {
  static uploadedFile: any = null;
  location: string = null;
  constructor(private fetchData: FetchDataService) {}

  ngOnInit() {}

  onLocation(location: string) {
    this.location = location;
  }

  async onSubmit(form: NgForm) {
    console.log(form.value);
    if (CreatEventComponent.uploadedFile) {
      await this.fetchData.creatEvent({
        ...form.value,
        location: this.location,
        _id: CreatEventComponent.uploadedFile.filename.substring(
          0,
          CreatEventComponent.uploadedFile.filename.indexOf(".")
        ),
        imgUrl:
          "http://localhost:5000/uploads/" +
          CreatEventComponent.uploadedFile.filename
      });
    } else {
      await this.fetchData.creatEvent({
        ...form.value,
        location: this.location
      });
    }
    console.log({ ...form.value, location: this.location });
    form.reset();
    CreatEventComponent.uploadedFile = null;
  }
}
