import { Component } from '@angular/core';
import {HTTPTestService} from './http-test.service';
import {MaterialModule} from '@angular/material';
import {movieDetails} from './movie-details'
import {genre} from './genre-main'
import {genres} from './genre-list'
import {favoriteComponent} from './app.favorite';
import {GenreService} from './genre.service'

@Component({
  selector: 'http-test',
  templateUrl: './http-test.component.html',
styleUrls:['./http-test.component.css'],

  providers:[HTTPTestService,favoriteComponent,GenreService]
})
export class HTTPTestComponent {
    getData=[];
    postData:string;
    value:string;
    moviename:string;
    MovieArray=[];
    scrolldistance=80000;
    throttle=20;
    page=1;
    totalpage:number;
    genreNew=[];
    count=1;
    

   
    constructor(private httpservice:HTTPTestService,private _fav:favoriteComponent,private _genre:GenreService){}
  
    onTestGet(value)
    {
        if(value != "")
        {
        this.httpservice.getcurrentData(value)
        .subscribe(
            data=>{this.getData=data.results;
                  this.totalpage=data.total_pages;
          },
            error=>alert(error),
            ()=>console.log("finished")
             );
        } 
        else
        {
            alert("Please type a movie name");
        }
     

       this._genre.getGenre()
       .subscribe(
         data=>(this.genreNew=data.genres)
       ,
       error=>alert(error),
            ()=>console.log("genres obtained")
       )
       
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
  this.genreNew.forEach(function(e){
    if (x.includes(e.id))
    {
      genreArray.push(e.name);
    }
    
  })
return genreArray;
}
onScroll (value) {
  if(this.httpservice.page<=this.totalpage){
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
keyDownFunction(event) {
  if(event.keyCode == 13) {
    console.log('you just clicked enter');
    // rest of your code
  }
}
 }
