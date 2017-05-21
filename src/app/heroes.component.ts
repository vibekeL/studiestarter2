import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { Router} from '@angular/router';

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: [ './heroes.component.css' ]
})

export class HeroesComponent implements OnInit {
  title = 'Tour of Heroes';
  heroes: Hero[];
  selectedHero: Hero;

  errorMessage: string = '';
  isLoading: boolean = true;

  constructor(
    private heroService: HeroService, 
    private router: Router) { }

  /**
  getHeroesORIGINAL(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
   /*/   

  getHeroes() {
    this.heroService.getHeroes()
                   .then(
                     heroes => this.heroes = heroes,
                     error =>  this.errorMessage = <any>error);
  }
  
  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

  add(name: string, age: number): void {
    name = name.trim();
    if (!name || age == 0) { return; }
      this.heroService.create(name, age)
        .then(hero => {
      this.heroes.push(hero);
      this.selectedHero = null;
    });
  }

  delete(hero: Hero): void {
  this.heroService
      .delete(hero.id)
      .then(() => {
        this.heroes = this.heroes.filter(h => h !== hero);
        if (this.selectedHero === hero) { this.selectedHero = null; }
        this.getHeroes();
      });
  }

}
