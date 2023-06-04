import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginEffects } from './features/login/login.effects';
import { loginReducer } from './features/login/login.reducer';
import { HeadComponent } from './head/head.component';
import { HomeComponent } from './home/home.component';
import { InComponent } from './in/in.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, InComponent, HeadComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EffectsModule.forRoot(LoginEffects),
    StoreModule.forRoot(
      {
        login: loginReducer,
      },
      {}
    ),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
