import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { FetchDataService } from "src/app/services/fetch-data.service";

@Component({
  selector: "app-file-input-component",
  templateUrl: "./file-input-component.component.html",
  styleUrls: ["./file-input-component.component.scss"]
})
export class FileInputComponent {
  constructor(private http: HttpClient, private fetchData: FetchDataService) {}
  filesToUpload: Array<File> = [];

  upload() {
    const formData: any = new FormData();
    const files: Array<File> = this.filesToUpload;
    for (let i = 0; i < files.length; i++) {
      formData.append("uploads[]", files[i], files[i]["name"]);
    }
    this.fetchData.uploadImageEvent(formData);
  }

  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
  }
}
