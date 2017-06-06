import {Injectable,Input} from '@angular/core';
import { Http,RequestOptions,Response,Headers } from "@angular/http";
import 'rxjs/add/operator/map';


@Injectable()
export class FavoriteService
{
    @Input()
    MovieArray=[];
    constructor(private _http:Http){}
    getcurrentData(){
        
        let headers = new Headers({ 'Content-Type': 'application/json','Access-Control-Allow-Methods':' GET, POST, PATCH, PUT, DELETE, OPTIONS' });
        let options = new RequestOptions({ headers: headers }); 
    
        return this._http.get('http://localhost:3000/api/bear/').map(res=>res.json());
    }
    postData(val){
        let headers = new Headers({ 'Content-Type': 'application/json','Access-Control-Allow-Methods':' GET, POST, PATCH, PUT, DELETE, OPTIONS' });
        let options = new RequestOptions({ headers: headers }); 
    
        return this._http.post('http://localhost:3000/api/bear/',val).map(()=> console.log('success'));

    }
    DeleteData(val){
        let headers = new Headers({ 'Content-Type': 'application/json','Access-Control-Allow-Methods':' GET, POST, PATCH, PUT, DELETE, OPTIONS' });
        let options = new RequestOptions({ headers: headers }); 
    
        return this._http.delete('http://localhost:3000/api/bear/'+val).map(res=>res.json(),()=> console.log('deleted'));

    }

    PutVal(val,value){
        let headers = new Headers({ 'Content-Type': 'application/json','Access-Control-Allow-Methods':' GET, POST, PATCH, PUT, DELETE, OPTIONS' });
        let options = new RequestOptions({ headers: headers });

        return this._http.put('http://localhost:3000/api/bear/'+val,value).map(()=> console.log('modified'));   
    }

   
}
