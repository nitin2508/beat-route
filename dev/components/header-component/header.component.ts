import {Component,Output,EventEmitter} from 'angular2/core';

@Component({
  selector: 'header',
  templateUrl: 'dev/components/header-component/header.component.html',
  styleUrls:['dev/components/header-component/header.component.css'],
})
export class HeaderComponent  {
  @Output() searchTermChanged:eventEmitter<string> new EventEmitter<string>();
    searchText:string ='';
    searchMovies():void{
      this.searchTermChanged.emit(this.searchText);
    }
     

}
