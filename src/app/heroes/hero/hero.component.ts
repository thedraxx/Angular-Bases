import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'ironman';
  public age: number = 45;


  get nameCapitalized(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }


  changeHeroName(): void {
    this.name = 'spiderman';
  }

  changeHeroAge(): void {
    this.age = 30;
  }

  resetForm(): void {
    this.name = 'ironman';
    this.age = 45;
  }

}
