import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class FetchDataService {
  data: any;
  constructor(private http: HttpClient) {}

  getProduct() {
    return this.http.get("https://jsonplaceholder.typicode.com/photos");
  }
}
