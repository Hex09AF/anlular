import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InComponent } from './in/in.component';
import { LoginComponent } from './login/login.component';
import { OutComponent } from './out/out.component';

const routes: Routes = [
  {
    path: 'login',
    title: 'Login',
    component: LoginComponent,
  },
  {
    path: 'home',
    title: 'Home',
    component: HomeComponent,
  },
  {
    path: 'in',
    title: 'Income',
    component: InComponent,
  },
  {
    path: 'out',
    title: 'Outcome',
    component: OutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
