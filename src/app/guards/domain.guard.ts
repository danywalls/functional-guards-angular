import {inject} from '@angular/core';
import {Router} from '@angular/router';
import {tap} from 'rxjs';
import {DomainService} from '../domain.service';

export const domainGuard = () => {
    const router = inject(Router);
    const service = inject(DomainService)
    return service.isAvailable().pipe(
    tap((value) => {
      return !value ? router.navigate(['/no-available']) : true
    }
  ))
}
