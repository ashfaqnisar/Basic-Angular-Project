import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ProductListComponent} from './product-list/product-list.component';
import {FormsModule} from "@angular/forms";
import {ConvertToSpacesPipe} from "./ConvertToSpacesPipe";

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpacesPipe//Declaring all the components
  ],
  imports: [
    BrowserModule,
    FormsModule,
//Application runs correctly in the browser
  ],
  bootstrap: [AppComponent]//Way the components should be called
})
export class AppModule {
}
