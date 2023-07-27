import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { exhaustMap, map, tap } from 'rxjs/operators';
import { login, loginSuccess } from './login.action';

@Injectable()
export class LoginEffects {
  loadMovies$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(login),
      exhaustMap(action =>
        of(EMPTY).pipe(
          tap(() => {
            console.log(action);
          }),
          map(loginSuccess)
        )
      )
    );
  });

  constructor(private actions$: Actions) {}
}
