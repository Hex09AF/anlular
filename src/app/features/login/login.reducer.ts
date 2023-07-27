import { createReducer, on } from '@ngrx/store';
import { login } from './login.action';

export const initialState = 0;

export const loginReducer = createReducer(
  initialState,
  on(login, (state): number => state + 1)
);
