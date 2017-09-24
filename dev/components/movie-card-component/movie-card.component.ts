import {Component,Input} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';   

@Component({
  selector: 'movie-card',
  templateUrl: 'dev/components/movie-card-component/movie-card.component.html',
  styleUrls:['dev/components/movie-card-component/movie-card.component.css'],
  directives:[ROUTER_DIRECTIVES]
})
export class MovieCardComponent  {
 @Input() movie:any[];
}
