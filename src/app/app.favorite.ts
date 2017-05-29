import { Component,Input} from '@angular/core'
import { HTTPTestComponent } from './http-test.component'

@Component({
  selector: 'my-favorite',
  template: `<h3>My Favorites</h3>
 <div *ngFor="let x of MovieArrayFav">
  <p>{{x.a}}</p>
</div>`




  /*   <div *ngFor="let temp of MovieArrayFav">
      <md-card-title class="panel panel-default">Title: {{temp.a}}</md-card-title><br>
    <md-card-title>Language: {{temp.a}}</md-card-title><br>
    <md-card-title>image: <img src="https://image.tmdb.org/t/p/w500{{temp.b}}" alt="image" ></md-card-title><br> 
    <md-card-title>Popularity: {{temp.c}}</md-card-title><br>
    <md-card-title>Overview: {{temp.d}}</md-card-title><br> 
     </div> */
  
})
export class favoriteComponent { 
    @Input() 
    MovieArrayFav=[];
    
     // console.log(this.MovieArrayFav);
      //return this.MovieArrayFav;
    }




