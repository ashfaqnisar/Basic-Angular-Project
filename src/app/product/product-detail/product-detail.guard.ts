import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {isEmpty} from "rxjs/operators";
import {invalid} from "@angular/compiler/src/render3/view/util";

@Injectable({
  providedIn: 'root'
})
export class ProductDetailGuard implements CanActivate {
  constructor(private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let id = +route.url[1].path;
    if (isNaN(id) || id < 1) {
      alert("Invalid Product ID");
      this.router.navigate(["/products"]);
      return false
    } else {
      return true;
    }
  }

}
