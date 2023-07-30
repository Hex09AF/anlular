import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { loginReducer } from './features/login/login.reducer';
import { EffectsModule } from '@ngrx/effects';
import { LoginEffects } from './features/login/login.effects';
import { HomeComponent } from './home/home.component';
import { InComponent } from './in/in.component';
import { OutComponent } from './out/out.component';
import { HeadComponent } from './head/head.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InComponent,
    OutComponent,
    HeadComponent,
  ],
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
