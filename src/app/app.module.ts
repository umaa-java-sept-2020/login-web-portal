import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginRootComponent } from './components/login-root/login-root.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginRootComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [LoginRootComponent]
})
export class AppModule { }
