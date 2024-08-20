import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/characters.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter<string>()

  @Input()
  public characterList:Character[] = []

  public onDeleteCharacter(index:string):void {
    console.log('Persona a eliminar ID', index)
    this.onDelete.emit(index)
  }

}
