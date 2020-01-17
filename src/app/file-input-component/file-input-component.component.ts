import { Component, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
selector: 'app-file-input-component',
templateUrl: './file-input-component.component.html',
styleUrls: ['./file-input-component.component.scss']
})

export class FileInputComponent  {
  selectedFile = null;
  constructor(private http: HttpClient) {}
  onFileSelected(event){
    this.selectedFile = event.target.files[0];
    console.log(event);
  }
  onUpload(){
    // const fd = formData();
    // fd.append('image')
    // this.http.post('url', )
  }
}
