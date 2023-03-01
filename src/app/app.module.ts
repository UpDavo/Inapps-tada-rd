import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { RouletteComponent } from './inapps/roulette/roulette.component';
import { AppComponent } from './app.component';
import { SpinComponent } from './inapps/spin/spin.component';

@NgModule({
  declarations: [AppComponent, RouletteComponent, SpinComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
