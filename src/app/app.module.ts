import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CommonComponent } from './common/common.component';
import { NavComponent } from './nav/nav.component';
import { CypressComponent } from './cypress/cypress.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import {NgForOf} from "@angular/common";
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CommonComponent,
    NavComponent,
    CypressComponent,
    ContentComponent,
    FooterComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgForOf
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
