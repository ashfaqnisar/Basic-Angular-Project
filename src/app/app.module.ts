import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {WelcomeComponent} from "./home/welcome.component";
import {ProductModule} from "./product/product.module";
import {AppRoutingModule} from "./app-routing.module";


@NgModule({
    declarations: [
        AppComponent,
        WelcomeComponent,
//Declaring all the components
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        ProductModule,
        AppRoutingModule
//Application runs correctly in the browser
    ],
    bootstrap: [AppComponent]//Way the components should be called
})
export class AppModule {
}
