import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { exhaustMap, map, tap } from 'rxjs/operators';
import { login, loginSuccess } from './login.actions';

@Injectable()
export class LoginEffects {
  loadMovies$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(login),
      exhaustMap(action =>
        of(EMPTY).pipe(
          tap(() => {
            console.log(action);
            this.router.navigate(['home']);
          }),
          map(loginSuccess)
        )
      )
    );
  });

  constructor(
    private actions$: Actions,
    private router: Router
  ) {}
}
