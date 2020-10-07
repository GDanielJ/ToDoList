import { Injectable } from "@angular/core";
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(): boolean { // TODO - implemetera roller!
    if (!this.authService.loggedIn()) {
      this.router.navigate(['/home']);
      console.log('Access denied');
      return false;
    }

    return true;
  }

}
