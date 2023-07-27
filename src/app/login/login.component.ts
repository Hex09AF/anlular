import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { login } from '../features/login/login.action';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  username = new FormControl('', { nonNullable: true });
  password = new FormControl('', { nonNullable: true });

  constructor(private store: Store) {}

  login() {
    this.store.dispatch(
      login({ username: this.username.value, password: this.password.value })
    );
  }
}
