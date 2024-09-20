import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { MessageService } from '../message.service';
@Component({
  selector: 'app-heroes',
  // standalone: true,
  // imports: [CommonModule, FormsModule, HeroDetailComponent],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css',
})
export class HeroesComponent {
  selectedHero?: Hero;
  heroes: Hero[] = [];
  hero: Hero | undefined;

  constructor(
    private heroService: HeroService,
    private messageService: MessageService
  ) {}
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }
  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }
  delete(hero: Hero): void {
    this.heroes = this.heroes.filter((h) => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
  }
  ngOnInit() {
    this.getHeroes();

    // this.getHeroes();
  }
  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.heroService.addHero({ name } as Hero).subscribe((hero) => {
      this.heroes.push(hero);
    });
  }
}
