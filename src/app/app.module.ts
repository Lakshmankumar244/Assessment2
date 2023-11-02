import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RestcountriesComponent } from './components/restcountries/restcountries.component';
import {HttpClientModule} from '@angular/common/http';
import { PracticeComponent } from './components/practice/practice.component';
@NgModule({
  declarations: [
    AppComponent,
    RestcountriesComponent,
    PracticeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
