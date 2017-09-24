import {Component} from 'angular2/core';
import {MoviesCardContainerComponent} from './components/movie-card-container-component/movie-card-container.component';
import {MovieDetailComponent} from './components/movie-detail-component/movie-detail.component';
import {ROUTER_PROVIDERS,RouteConfig,ROUTER_DIRECTIVES} from 'angular2/router';    

@Component({
    selector: 'my-app',
    template: `
    <div>
        <router-outlet></router-outlet>
    </div>
    `,
    directives:[MoviesCardContainerComponent,ROUTER_DIRECTIVES],
    providers:[ROUTER_PROVIDERS],
})
@RouteConfig([
    {path:'/movies',name:'Welcome',component:MoviesCardContainerComponent,useAsDefault:true},
    {path:'/movie/:key',name:'MovieDetail',component:MovieDetailComponent}
    
])
export class AppComponent {

}

