import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CounterService } from './services/counter.service';
import { appReducer } from './store/app.state';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DisplayCounterComponent } from './display-counter/display-counter.component';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayCounterComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({joaozinho: appReducer}),
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CounterService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
