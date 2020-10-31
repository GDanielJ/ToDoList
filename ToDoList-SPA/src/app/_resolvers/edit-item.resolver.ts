import { Injectable } from "@angular/core";
import { Resolve, Router, ActivatedRouteSnapshot } from "@angular/router";
import { ListItem } from '../_models/list-item';
import { ListItemService } from '../_services/list-item.service';
import { Observable, of } from 'rxjs';
import { AuthService } from '../_services/auth.service';
import { catchError } from 'rxjs/operators';


@Injectable()
export class EditItemResolver implements Resolve<ListItem>  {

  constructor(private router: Router, private listItemService: ListItemService, private authService: AuthService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<ListItem> {
    return this.listItemService.getItem(this.authService.decodedToken.nameid, route.params['id']).pipe( 
      catchError(error => {
        console.log(error);
        this.router.navigate(['/todolists']);
        return of(null);
      })
    );
  }

}
