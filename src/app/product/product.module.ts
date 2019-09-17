import {NgModule} from '@angular/core';
import {ProductDetailComponent} from "./product-detail/product-detail.component";
import {ProductListComponent} from "./product-list/product-list.component";
import {RouterModule} from "@angular/router";
import {SharedModule} from "../shared/shared.module";
import {PipesModule} from "../pipes/pipes.module";
import {ProductRoutingModule} from "./product-routing.module";


@NgModule({
    declarations: [
        ProductDetailComponent,
        ProductListComponent,
    ],
    imports: [
        SharedModule,
        PipesModule,
        RouterModule,
        ProductRoutingModule
    ]
})
export class ProductModule {
}
