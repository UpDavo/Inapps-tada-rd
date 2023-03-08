import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatchingComponent } from './inapps/catching/catching.component';
import { RouletteComponent } from './inapps/roulette/roulette.component';
import { SpinComponent } from './inapps/spin/spin.component';

const routes: Routes = [
  { path: 'roulette', component: RouletteComponent },
  { path: 'catching', component: CatchingComponent },
  { path: 'spin', component: SpinComponent },

  // no layout views
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
