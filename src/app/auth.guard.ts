import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, RouteReuseStrategy } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private rotuer:Router){}

  canActivate() {   
    if (!!localStorage.getItem("isLogin")) {
      return true
    }else{
      this.rotuer.navigateByUrl("")
      return false
    }
    
  }
  
}
