import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {


  @Input()
  public characterList: Character[] = [{
    name: 'Trunk',
    power: 10
  }]

  @Output()
  public onDelete:EventEmitter<string> = new EventEmitter();

  public onDeleteCharacter(id?:string):void{

    //console.log({index});

    if (!id) return;
    
    this.onDelete.emit(id);

  }

}
