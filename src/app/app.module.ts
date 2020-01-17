import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { JwPaginationComponent } from "jw-angular-pagination";
import { MDBBootstrapModule } from "angular-bootstrap-md";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { HomeComponent } from "./components/home/home.component";
import { CardComponent } from "./components/card/card.component";
import { CarouselsComponent } from "./components/carousels/carousels.component";
import { ProfileComponent } from "./components/profile/profile.component";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { FetchDataService } from "../app/services/fetch-data.service";
import { InfoComponent } from "./components/info/info.component";
import { TokenInterceptorService } from "../app/services/token-interceptor.service";
const appRoutes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  // {
  //   path: "event/:id",
  //   component: CarouselsComponent
  // },
  {
    path: "profile",
    component: ProfileComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    ProfileComponent,
    CarouselsComponent,
    JwPaginationComponent,
    CardComponent,
    InfoComponent
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
  providers: [
    FetchDataService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
