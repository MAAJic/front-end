
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EventDetailsComponentComponent } from './event-details-component/event-details-component.component';
import { EventCreatorDetailsComponent } from './event-creator-details/event-creator-details.component';
import { MainImageEventBannerComponent } from './main-image-event-banner/main-image-event-banner.component';
import { CommentComponentComponent } from './comment-component/comment-component.component';
import { SingleCommentComponentComponent } from './single-comment-component/single-comment-component.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    EventDetailsComponentComponent,
    EventCreatorDetailsComponent,
    MainImageEventBannerComponent,
    CommentComponentComponent,
    SingleCommentComponentComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
