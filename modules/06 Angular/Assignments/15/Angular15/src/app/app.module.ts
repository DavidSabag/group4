import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ImgComponent } from './img/img.component';
import { DisplayerComponent } from './displayer/displayer.component';

@NgModule({
  declarations: [
    AppComponent,
    ImgComponent,
    DisplayerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
