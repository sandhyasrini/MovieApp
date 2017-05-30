import {Injectable} from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class GenreService
{
    
    constructor(private _http:Http){}
    getGenre()
    {
        return this._http.get('https://api.themoviedb.org/3/genre/movie/list?api_key=79c71d219bbe9bc37d390a039810794e&language=en-US').map(res=>res.json());
    }
    Postjson()
    {

    }
}
