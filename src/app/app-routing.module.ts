import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VillainsComponent } from './villains/villains.component';
import { VillainDetailsComponent } from './villain-details/villain-details.component';
import { CompareComponent } from './compare/compare.component';

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'heroes/detail/:id', component: HeroDetailComponent },
  { path: 'villains/detail/:id', component: VillainDetailsComponent },

  { path: 'dashboard', component: DashboardComponent },
  { path: 'villains', component: VillainsComponent },
  { path: 'compare', component: CompareComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
