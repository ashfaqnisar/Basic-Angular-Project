import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';

@NgModule({
  declarations: [
    AppComponent//Declaring all the components
  ],
  imports: [
    BrowserModule//Application runs correctly in the browser
  ],
  bootstrap: [AppComponent]//Way the components should be called
})
export class AppModule {
}
