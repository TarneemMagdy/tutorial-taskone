import { Component } from '@angular/core';
import { IMovie } from './movieslist/movie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template:`<div>
  // <h1>welcome to meanpp stack app</h1>
  // </div>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'meanapp';

  // firstName:string='tarneem';


}
