import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { RouletteComponent } from './inapps/roulette/roulette.component';
import { AppComponent } from './app.component';
import { SpinComponent } from './inapps/spin/spin.component';
import { CatchingComponent } from './inapps/catching/catching.component';
import { CatchingGameComponent } from './inapps/catching/catching-game/catching-game.component';
import { SpinGameComponent } from './inapps/spin/spin-game/spin-game.component';
import { VideoComponent } from './inapps/video/video.component';

@NgModule({
  declarations: [AppComponent, RouletteComponent, SpinComponent, CatchingComponent, CatchingGameComponent, SpinGameComponent, VideoComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
