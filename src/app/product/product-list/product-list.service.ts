import {Injectable} from "@angular/core";
import {ProductData} from "./ProductData";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError, map, tap} from "rxjs/operators";

@Injectable({
  providedIn:"root"
})
export class ProductListService {
  products:string = "api/products/products.json ";
  constructor(private http:HttpClient){

  }

  getProducts(): Observable<ProductData[]>{
    console.log(this.http.get<ProductData[]>(this.products));
    return this.http.get<ProductData[]>(this.products).pipe(
      tap(data =>console.log( "All:" + JSON.stringify(data))),
      catchError(this.handleError)
    )
  }
  getProduct(id:number):Observable<ProductData>{
    return this.getProducts().pipe(
      map((products: ProductData[])=>products.find(p=> p.productId === id))
    );
  }
  private handleError(err:HttpErrorResponse){
    let errorMessage= "";

    if(err.error instanceof ErrorEvent){
      errorMessage = `An error occured ${err.error.message}`
    }else{
      errorMessage = `Server returned code ${err.status}, error message is: ${err.message}`
    }
    console.error(errorMessage);
    return throwError(errorMessage)
  }

}
