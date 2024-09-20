import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { Villain } from '../villain';
import { VillainService } from '../villain.service';
import { consumerPollProducersForChange } from '@angular/core/primitives/signals';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  heroes: Hero[] = [];
  villains: Villain[] = [];
  constructor(
    private heroService: HeroService,
    private villainService: VillainService
  ) {}

  ngOnInit(): void {
    this.getHeroes();
    this.getVillains()
  }

  getHeroes(): void {
    this.heroService
      .getHeroes()
      .subscribe((heroes) => (this.heroes = heroes.slice(1, 5)));
  }

  getVillains(): void {
    this.villainService
      .getVillains()
      .subscribe((villain) => (this.villains = villain.slice(1, 5)));
    console.log(this.villains);
  }
}
