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
import { PinataComponent } from './inapps/pinata/pinata.component';
import { SpinComponent2 } from './inapps/spin copy/spin-2.component';
import { SpinGameComponent2 } from './inapps/spin copy/spin-game-2/spin-game-2.component';
import { VideoComponent2 } from './inapps/video2/video.component';
import { CodeValidatorComponent } from './views/code-validator/code-validator.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouletteComponent1 } from './inapps/roulette1/roulette1.component';

@NgModule({
  declarations: [
    AppComponent,
    RouletteComponent,
    RouletteComponent1,
    SpinComponent,
    SpinComponent2,
    CatchingComponent,
    CatchingGameComponent,
    SpinGameComponent,
    SpinGameComponent2,
    VideoComponent,
    VideoComponent2,
    PinataComponent,
    CodeValidatorComponent,
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
