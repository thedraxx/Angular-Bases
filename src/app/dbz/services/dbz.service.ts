import { Injectable } from '@angular/core';
import { Character } from '../interfaces/characters.interface';
import {v4 as uuid} from 'uuid';

@Injectable({providedIn: 'root'})
export class DbzService {
  public characters:Character[] = [
    {
      name: 'Goku',
      power: 15000,
      id: uuid()
    },
    {
      name: 'Vegeta',
      power: 7500,
      id: uuid()
    },
    {
      name: 'Trunks',
      power: 6000,
      id: uuid()
    },
    {
      name: 'Piccolo',
      power: 5000,
      id: uuid()
    },
    {
      name: 'Gohan',
      power: 4000,
      id: uuid()
    }
  ]

  public addCharacter(character:Character):void {
    console.log('Main Page Component' + character);
    this.characters.push({...character, id: uuid()});
  }

  public DeleteCharacterById(id:string):void {
    console.log('Main Page Component', id)
    this.characters = this.characters.filter(character => character.id !== id);
  }




}
