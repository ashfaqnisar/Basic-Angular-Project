import {Component, OnInit} from '@angular/core';
import {ProductData} from "../product-list/ProductData";
import {ActivatedRoute} from "@angular/router";
import {ProductListService} from "../product-list/product-list.service";
import {Router} from "@angular/router";

@Component({
  selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  pageTitle: string = "Product Detail ";
  product: ProductData;
  products: ProductData[];
  id: number;
  private errorMessage: string;

  constructor(private router: Router,private route: ActivatedRoute, private service: ProductListService) {

  }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get("id");//"+" is used to convert the string into a numeric id
    this.service.getProduct(this.id).subscribe({
        next: product => {
          this.product = product
        },
        error: err => {
          this.errorMessage = err
        }
      }
    );
  }
  onBack(): void {
    this.router.navigate(["/products"]);
  }

}
