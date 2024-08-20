import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.service';
import { Character } from '../interfaces/characters.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: 'main-page.component.html'
})

export class mainPageComponent {


  constructor(private DbzService: DbzService) {}

    get characters(): Character[]{
      return [...this.DbzService.characters];
    }

    onDeleteCharacter(id: string): void {
      this.DbzService.DeleteCharacterById(id);
    }

    onNewCharacter(character: Character): void {
      this.DbzService.addCharacter(character);
    }

}
