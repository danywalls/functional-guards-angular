import {Injectable} from '@angular/core';
import {of, tap} from 'rxjs';

@Injectable({providedIn: 'root'})
export class DomainService {

  isAvaliable() {
    return of(false).pipe(
      tap((v) =>console.log(v) )
    )
  }
}
