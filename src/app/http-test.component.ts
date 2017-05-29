import { Component } from '@angular/core';
import {HTTPTestService} from './http-test.service';
import {MaterialModule} from '@angular/material';
import {movieDetails} from './movie-details'
import {genre} from './genre-main'
import {genres} from './genre-list'
import {favoriteComponent} from './app.favorite'

@Component({
  selector: 'http-test',
  templateUrl: './http-test.component.html',
styleUrls:['./http-test.component.css'],

  providers:[HTTPTestService,favoriteComponent]
})
export class HTTPTestComponent {
    getData=[];
    postData:string;
    value:string;
    moviename:string;
    MovieArray=[];
    scrolldistance=50000;
    throttle=2;
    page=1;
    

   
    constructor(private httpservice:HTTPTestService,private _fav:favoriteComponent){}
  
    onTestGet(value,page)
    {
        this.httpservice.getcurrentData(value)
        .subscribe(
            data=>this.getData=data.results,
            error=>alert(error),
            ()=>console.log("finished")
      );
      
       
    }
     
    
   pushData(a,b,c,d,e,f){
     let obj={a,b,c,d,e,f}
     this._fav.MovieArrayFav.push(obj);
  
    /* this._fav.pushVal(a,b,c,d,e,f);
     
     let obj={a,b,c,d,e,f}
      this.MovieArray.push(obj);
      console.log(this.MovieArray);
      return this.MovieArray;*/
    }
     
pushGenre(x){
  let genreArray=[];
  genres.forEach(function(e){
    if (x.includes(e.id))
    {
      genreArray.push(e.name);
    }
    
  })
return genreArray;
}
onScroll (value,page) {
  this.httpservice.page++;
        console.log('scrolled!!');
         this.httpservice.getcurrentData(value)
        .subscribe(
            // data=>{this.getData.push(data.results),console.log(this.getData)},
            data=> {data.results.forEach((elem) => {
              this.getData.push(elem);
            })},
            error=>alert(error),
            ()=>console.log("finished")
      );
        
    }
 }
