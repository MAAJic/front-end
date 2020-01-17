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
import { LoginComponent } from "../app/components/login/login.component";
import { EventDetailsComponentComponent } from "./components/event/event-details-component/event-details-component.component";
import { EventCreatorDetailsComponent } from "./components/event/event-creator-details/event-creator-details.component";
import { MainImageEventBannerComponent } from "./components/event/main-image-event-banner/main-image-event-banner.component";
import { CommentComponentComponent } from "./components/event/comment-component/comment-component.component";
import { SingleCommentComponentComponent } from "./components/event/single-comment-component/single-comment-component.component";

const appRoutes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "profile",
    component: ProfileComponent
  },
  {
    path: "signup",
    component: LoginComponent
  },
  {
    path: "event/:id",
    component: EventDetailsComponentComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  { path: "**", component: HomeComponent } // If no matching route found, go back to home route
];

@NgModule({
  declarations: [
    AppComponent,
    EventDetailsComponentComponent,
    EventCreatorDetailsComponent,
    MainImageEventBannerComponent,
    CommentComponentComponent,
    SingleCommentComponentComponent,
    LoginComponent,
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
    RouterModule.forRoot(appRoutes),
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
