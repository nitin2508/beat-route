import {Component,OnInit,Input} from 'angular2/core';
import {MovieCardComponent} from '../movie-card-component/movie-card.component';
import {movies} from '../../model/movie.mock-data';
import {HeaderComponent} from '../header-component/header.component';
@Component({
  selector: 'movies-card-container',
  templateUrl: 'dev/components/movie-card-container-component/movie-card-container.component.html',
  styleUrls:['dev/components/movie-card-container-component/movie-card-container.component.css'],
   directives:[MovieCardComponent,HeaderComponent]
})
export class MoviesCardContainerComponent implements OnInit {

moviesArray:any[];
moviesMetaData:any[];
 @Input() searchTerm:string;

onSearchTermChanged(term:string):void{
    console.log(term);
        if(this.moviesMetaData){
            this.moviesArray = [];
            console.log(this.moviesMetaData);
        for(var i=0;i<this.moviesMetaData.length;i++){
            if(this.moviesMetaData[i].name.toLowerCase().indexOf(term.toLowerCase())>-1){
                this.moviesArray.push(this.moviesMetaData[i]);
            }
        }
    }
    }


ngOnInit():void{
    this.moviesMetaData = movies;
    this.moviesArray = movies;
}
}
