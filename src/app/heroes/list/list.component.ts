import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroNames: string[] = ['ironman', 'spiderman', 'thor', ' captain america'];

  public lastHeroDeleted: string | undefined = '';

  public lastHeroAdded: string | undefined = '';

  public removeHero(): void {
    this.lastHeroDeleted =  this.heroNames.pop();
  }

  public addHero(): void {
   this.heroNames.push('black widow');
    this.lastHeroAdded = 'black widow';
  }
}
