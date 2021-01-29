import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public titulo : string = 'Curso udemy angular 2021';
  public numero : number = 0;
  public base:number = 5;

  public lenguajes:string[] = ['Typescript','Javascript','Java','C#'];


  acumular(valor : number){
    this.numero = this.numero + valor;
  }

}
