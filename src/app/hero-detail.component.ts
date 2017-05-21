// Keep the Input import for now, you'll remove it later:
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: [ './hero-detail.component.css' ],
})

export class HeroDetailComponent implements OnInit {

errorMessage: string = '';
private sub: any;
heroID: number;

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
        this.heroID = +params['id']; // (+) converts string 'id' to a number
    });
      this.getMyHeroe(this.heroID);
  }

  getMyHeroe(id: number) {
    this.heroService.getHero(id)
                   .then(
                     hero => this.hero = hero,
                     error =>  this.errorMessage = <any>error);
}

  constructor(
      private heroService: HeroService,
      private route: ActivatedRoute,
      private location: Location
    ) {}

    goBack(): void {
      this.location.back();
    }

    save(): void {
      this.heroService.update(this.hero)
        .then(() => this.goBack());
    }


  @Input() hero: Hero;
}
