import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddPublicationComponent } from './add-publication/add-publication.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { DetailsPublicationComponent } from './details-publication/details-publication.component';

@NgModule({
  declarations: [
    AppComponent,
    AddPublicationComponent,
    HomeComponent,
    DetailsPublicationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
