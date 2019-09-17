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
  private errorMessage: any;

  constructor(private productListService:ProductListService) {
  }

  ngOnInit(): void {//Best way to assign the variables
    this.productListService.getProducts().subscribe({
      next: products =>{
        this.products = products;
        this.filteredProducts = this.products;
      },
      error: err => {this.errorMessage = err}
    });

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
