import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeuPrimeiroModuloModule } from './meu-primeiro-modulo/meu-primeiro-modulo.module';
import { BannerComponent } from './home/banner/banner.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    HomeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MeuPrimeiroModuloModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
