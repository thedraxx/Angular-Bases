import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <p>Contador</p>
  <h3>{{counter}}</h3>

  <button (click)="increment(5)">Incrementar</button>
  <button (click)="reset()">Resetar</button>
  <button (click)="decrement(5)">Decrementar</button>
  `
})

export class CounterComponent  {
  constructor() { }
  public title:string = 'Hola mundo';
  public counter:number = 0;

  public increment(value:number):void {
    this.counter += value;
  }

  public decrement(value:number):void {
    this.counter -= value;
  }

  public reset():void {
    this.counter = 0;
  }

}
