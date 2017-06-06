import { Component,Input} from '@angular/core'
import { HTTPTestComponent } from './http-test.component'
import {FavoriteService} from './app.favorite.service'


@Component({
  selector: 'my-favorite',
  templateUrl:'./app.favorite.html',
  styleUrls:['./app.favorite.css']
})
export class favoriteComponent { 
MovieName="sandhya";
butDisabled: boolean = true;

 constructor(private favservice:FavoriteService){
    this.favservice.getcurrentData()
        .subscribe(
            data=>{this.favservice.MovieArray=data;
              console.log(this.favservice.MovieArray); 
                
          },
            error=>alert(error),
            ()=>console.log("finished")
             );
 }

postValue(Id,title,overview,release_date,original_language,popularity,poster_path)
{
  let id=String(Id);
  let obj={id,title,overview,release_date,original_language,popularity,poster_path};
 this.favservice.postData(obj)
   .subscribe(
            (data)=>
            
              //this.favservice.MovieArray=data;
              console.log("posted value")
          ,
            error=>function(error){
          if(error.responseText == 'showAlert')
              alert("Favorites added already!!")},
            ()=>console.log("posted data!!")
             );


 }
DeleteVal(Id){
  let id=String(Id);
  console.log(id);
  this.favservice.DeleteData(id)
  .subscribe(
    (data)=>
    alert("deleted succesfully")
    ,
    error=>alert(error),
            ()=>this.favservice.getcurrentData()
        .subscribe(
            data=>{this.favservice.MovieArray=data;
              console.log(this.favservice.MovieArray);   
          },
            error=>alert(error),
            ()=>console.log("finished")
             )
  );


}
  
      onPut(Id,title,overview,release_date,original_language,popularity,poster_path){
        let id=String(Id);
        let obj={id,title,overview,release_date,original_language,popularity,poster_path};
       this.favservice.PutVal(id,obj)
       .subscribe(
         (data)=>
         {
       //  this.favservice.MovieArray=data;  
         alert("MODIFIED !!");
         console.log(data);
         },
         error=>alert(error),
            ()=>this.favservice.getcurrentData()
        .subscribe(
            data=>{this.favservice.MovieArray=data;
              console.log(this.favservice.MovieArray);   
          },
            error=>alert(error),
            ()=>console.log("finished")
             )

       );
    }
       
 change(){
   this.butDisabled=false;
   console.log("hello");
   console.log(this.butDisabled);

 }       
    
}



