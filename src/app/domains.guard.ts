import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {tap} from 'rxjs';
import {DomainService} from './domain.service';

@Injectable({providedIn: 'root'})
export class DomainsGuard implements CanActivate {
  constructor(private domainService: DomainService, private router: Router) {

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
     return this.domainService.isAvailable().pipe(
       tap(value =>  !value ?  this.router.navigate(['/no-available']) : true)
     )
  }
}
