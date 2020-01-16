import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { JwPaginationComponent } from "jw-angular-pagination";
import { MDBBootstrapModule } from "angular-bootstrap-md";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { HomeComponent } from "./home/home.component";
import { TestComponent } from "./test/test.component";
import { CardComponent } from "./card/card.component";
import { HttpClientModule } from "@angular/common/http";
import { FetchDataService } from "../app/services/fetch-data.service";

const appRoutes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "event/:id",
    component: TestComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    TestComponent,
    JwPaginationComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    MDBBootstrapModule.forRoot(),
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [FetchDataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
