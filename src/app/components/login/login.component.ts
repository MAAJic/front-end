import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { FetchDataService } from "src/app/services/fetch-data.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  constructor(private fetchData: FetchDataService, private router: Router) {}
  ngOnInit() {}
  async logIn(form: NgForm) {
    let data: any = await this.fetchData.authentification(form.value);
    console.log(data);
    if (data.found) {
      this.fetchData.storeToken(data.token);
      this.router.navigate(["/"]);
    }
  }
  async signUp(form: NgForm) {
    let data: any = await this.fetchData.authentification(form.value);
    console.log(data);

    if (data.saved) {
      this.fetchData.storeToken(data.token);
      this.router.navigate(["/"]);
    }
  }
}
