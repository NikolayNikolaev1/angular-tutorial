import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import Hero from '../hero';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.heroService
      .getHeroes()
      .subscribe((h) => (this.heroes = h.slice(1, 5)));
  }
}
