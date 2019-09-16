import {Component, OnInit} from '@angular/core';
import {ProductData} from "./ProductData";
import {ProductListService} from "./product-list.service";


@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
  tableTitle: string = "Product List";
  showImage: boolean = false;

  _filter: string;

  products: ProductData[];
  filteredProducts: ProductData[];

  constructor(private productListService:ProductListService) {
  }

  ngOnInit(): void {//Best way to assign the variables
    this.products = this.productListService.getProducts();
    this.filteredProducts = this.products
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  get filter(): string {
    return this._filter
  }
  set filter(value: string) {
    this._filter = value;
    this.filteredProducts = this.filter ? this.performFilter(this.filter) : this.products
  }

  performFilter(filterBy: string): ProductData[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: ProductData) =>
      product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1)
  }

  processEvent($event: string) :void {
    alert($event)
  }
}
