import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import Hero from '../hero';
import { MessageService } from '../message.service';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrl: './heroes-list.component.css',
})
export class HeroesListComponent implements OnInit {
  // heroes = this.heroService.getHeroes();
  heroes: Hero[] = [];
  selectedHero?: Hero;

  constructor(
    private heroService: HeroService,
    private messageService: MessageService
  ) {}

  // Best practise.
  ngOnInit(): void {
    this.heroService.getHeroes().subscribe((h) => (this.heroes = h));
  }

  onHeroSelect(hero: Hero) {
    if (this.selectedHero === hero) {
      this.selectedHero = undefined;
      this.messageService.add(`Hero ${hero.name.toUpperCase()} unselected!`);
      return;
    }

    this.selectedHero = hero;
    this.messageService.add(`Hero ${hero.name.toUpperCase()} selected!`);
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
  delete(hero: Hero): void {
    this.heroes = this.heroes.filter((h) => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
  }
}
