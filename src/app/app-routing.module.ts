import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatchingGameComponent } from './inapps/catching/catching-game/catching-game.component';
import { CatchingComponent } from './inapps/catching/catching.component';
import { RouletteComponent } from './inapps/roulette/roulette.component';
import { SpinGameComponent } from './inapps/spin/spin-game/spin-game.component';
import { SpinComponent } from './inapps/spin/spin.component';
import { VideoComponent } from './inapps/video/video.component';
import { PinataComponent } from './inapps/pinata/pinata.component';
import { SpinComponent2 } from './inapps/spin copy/spin-2.component';
import { SpinGameComponent2 } from './inapps/spin copy/spin-game-2/spin-game-2.component';
import { VideoComponent2 } from './inapps/video2/video.component';
import { CodeValidatorComponent } from './views/code-validator/code-validator.component';
import { RouletteComponent1 } from './inapps/roulette1/roulette1.component';

const routes: Routes = [
  { path: 'roulette', component: RouletteComponent },
  { path: 'roulette1', component: RouletteComponent1 },
  { path: 'video', component: VideoComponent },
  { path: 'video2', component: VideoComponent2 },
  { path: 'catching', component: CatchingComponent },
  { path: 'catching/game', component: CatchingGameComponent },
  { path: 'spin', component: SpinComponent },
  { path: 'spin/game', component: SpinGameComponent },
  { path: 'spin2', component: SpinComponent2 },
  { path: 'spin2/game2', component: SpinGameComponent2 },
  { path: 'pinata', component: PinataComponent },
  { path: 'codes', component: CodeValidatorComponent },

  // no layout views
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
