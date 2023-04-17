import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatchingGameComponent } from './inapps/catching/catching-game/catching-game.component';
import { CatchingComponent } from './inapps/catching/catching.component';
import { RouletteComponent } from './inapps/roulette/roulette.component';
import { SpinGameComponent } from './inapps/spin/spin-game/spin-game.component';
import { SpinComponent } from './inapps/spin/spin.component';
import { VideoComponent } from './inapps/video/video.component';
import { PinataComponent } from './inapps/pinata/pinata.component';

const routes: Routes = [
  { path: 'roulette', component: RouletteComponent },
  { path: 'video', component: VideoComponent },
  { path: 'catching', component: CatchingComponent },
  { path: 'catching/game', component: CatchingGameComponent },
  { path: 'spin', component: SpinComponent },
  { path: 'spin/game', component: SpinGameComponent },
  { path: 'pinata/game', component: PinataComponent },

  // no layout views
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
