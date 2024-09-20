import { Component } from '@angular/core';

import { HeroService } from '../hero.service';
import { VillainService } from '../villain.service';
import { Hero } from '../hero';
import { Villain } from '../villain';
// import { Label } from 'ng2-charts';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-compare',
  // standalone: true,
  // imports: [],
  templateUrl: './compare.component.html',
  styleUrl: './compare.component.css',
})
export class CompareComponent {
  heroes: Hero[] = [];
  villains: Villain[] = [];
  selectedHero?: Hero;
  selectedVillain?: Villain;
  result: boolean = false;
  constructor(
    private heroService: HeroService,
    private villainService: VillainService
  ) {}
  barChartLegend = true;
  barChartPlugins = [];

  barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: ['power level'],
    datasets: [
      { data: [65], label: 'Hero' },
      // { data: [100], label: 'Villain' },
    ],
  };

  barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: false,
  };

  ngOnInit() {
    // this.barChartData.datasets[0].data = [10];
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
    this.villainService
      .getVillains()
      .subscribe((villains) => (this.villains = villains));
    setTimeout(() => {
      console.log(this.heroes, this.villains);
    }, 2000);
  }
  onSelectHero(event: Event): void {
    const selectedElement = event.target as HTMLInputElement;
    const id = selectedElement.value;
    // console.log(hero)
    this.heroService.getHero(Number(id)).subscribe((hero) => {
      this.selectedHero = hero;
    });
    this.result = false;
    // this.selectedHero = hero;
  }
  onSelectVillain(event: Event): void {
    const selectedElement = event.target as HTMLInputElement;
    const id = selectedElement.value;
    // console.log(hero)
    this.villainService.getVillain(Number(id)).subscribe((villain) => {
      this.selectedVillain = villain;
    });
    this.result = false;
  }
  checkResult(): void {
    if (this.selectedHero && this.selectedVillain) {
      console.log(this.selectedHero, this.selectedVillain);
      this.barChartData = {
        labels: ['powerLevel'],
        datasets: [
          {
            data: [this.selectedHero.powerLevel],
            label: 'Hero - ' + this.selectedHero.name,
          },
          {
            data: [this.selectedVillain.powerLevel],
            label: 'Villain - ' + this.selectedVillain.name,
          },
          // { data: [100], label: 'Villain' },
        ],
      };
      this.result = true;
    }
  }
}
