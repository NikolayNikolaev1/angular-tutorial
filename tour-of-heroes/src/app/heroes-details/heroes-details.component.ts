import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import Hero from '../hero';
import { HeroService } from '../hero.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-heroes-details',
  templateUrl: './heroes-details.component.html',
  styleUrl: './heroes-details.component.css',
})
export class HeroesDetailsComponent implements OnInit {
  hero?: Hero;
  checkoutForm = this.formBuilder.group({ name: '' });

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private formBuilder: FormBuilder,
    private heroService: HeroService
  ) {}

  ngOnInit(): void {
    const heroId = this.route.snapshot.paramMap.get('id');

    this.heroService.getHero(Number(heroId)).subscribe((h) => (this.hero = h));
  }

  backClicked() {
    this.location.back();
  }

  save(): void {
    if (this.hero) {
      this.heroService
        .updateHero(this.hero)
        .subscribe(() => this.backClicked());
    }
  }

  // onSubmit() {
  //   const heroName = this.checkoutForm.value.name;

  //   if (heroName) {
  //     const heroId = this.route.snapshot.paramMap.get('id');
  //     this.heroService.updateHero(Number(heroId), heroName);
  //     this.heroService
  //       .getHero(Number(heroId))
  //       .subscribe((h) => (this.hero = h));
  //   }
  // }
}
