import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ProductListComponent} from './product-list/product-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent//Declaring all the components
  ],
  imports: [
    BrowserModule//Application runs correctly in the browser
  ],
  bootstrap: [AppComponent]//Way the components should be called
})
export class AppModule {
}
