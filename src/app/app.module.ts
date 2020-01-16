
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
import {ConnectorService} from './connector.service';
import { HttpClientModule } from '@angular/common/http';


// const routes: Routes = [
//   { path: 'home', component: HomeComponent },
//   { path: 'event/:id', component: AboutComponent },
//   { path: 'terms',        component: TermsComponent },
//   { path: '',   redirectTo: '/home', pathMatch: 'full' },
//   { path: '**', component: PageNotFoundComponent },

// ];

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
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ConnectorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
