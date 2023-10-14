import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name: string = 'ironman';
  public age: number = 45;

  public getCapitalizaName():string{
    return this.name.toUpperCase();
  }

  public getHeroDescription():string {
    return `${ this.name } - ${ this.age }`
  }

  public changeHero(): void{

    this.name = 'Spiderman'

  }

  public changeAge(): void{

    this.age = 25;

  }

  public resetForm():void{
    this.name = 'ironman';
    this.age = 45;
    
      //document.querySelectorAll('h1').forEach(Element => {
      //Element.innerHTML = '<h1>Desde Angular</h1>'
      //})

  }

}
