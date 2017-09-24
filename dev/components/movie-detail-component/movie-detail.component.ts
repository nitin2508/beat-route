import {Component,Input} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {movies} from '../../model/movie.mock-data';
import {ROUTER_DIRECTIVES} from 'angular2/router'; 
@Component({
  selector: 'movie-detail',
  templateUrl: 'dev/components/movie-detail-component/movie-detail.component.html',
  styleUrls:['dev/components/movie-detail-component/movie-detail.component.css'],
  directives:[ROUTER_DIRECTIVES]
})
export class MovieDetailComponent  {

  movie:any[];
 constructor(private _routeParams:RouteParams){
   let key = this._routeParams.get('key');
   console.log(key);
   for(var i=0;i<movies.length;i++){
     if(movies[i].key ===key){
       this.movie = movies[i];
       break;
     }
   }
   console.log(this.movie);
 }
}
