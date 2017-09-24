System.register(['angular2/core', './components/movie-card-container-component/movie-card-container.component', './components/movie-detail-component/movie-detail.component', 'angular2/router'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, movie_card_container_component_1, movie_detail_component_1, router_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (movie_card_container_component_1_1) {
                movie_card_container_component_1 = movie_card_container_component_1_1;
            },
            function (movie_detail_component_1_1) {
                movie_detail_component_1 = movie_detail_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n    <div>\n        <router-outlet></router-outlet>\n    </div>\n    ",
                        directives: [movie_card_container_component_1.MoviesCardContainerComponent, router_1.ROUTER_DIRECTIVES],
                        providers: [router_1.ROUTER_PROVIDERS],
                    }),
                    router_1.RouteConfig([
                        { path: '/movies', name: 'Welcome', component: movie_card_container_component_1.MoviesCardContainerComponent, useAsDefault: true },
                        { path: '/movie/:key', name: 'MovieDetail', component: movie_detail_component_1.MovieDetailComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFvQkE7Z0JBQUE7Z0JBRUEsQ0FBQztnQkFqQkQ7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsUUFBUTt3QkFDbEIsUUFBUSxFQUFFLHdFQUlUO3dCQUNELFVBQVUsRUFBQyxDQUFDLDZEQUE0QixFQUFDLDBCQUFpQixDQUFDO3dCQUMzRCxTQUFTLEVBQUMsQ0FBQyx5QkFBZ0IsQ0FBQztxQkFDL0IsQ0FBQztvQkFDRCxvQkFBVyxDQUFDO3dCQUNULEVBQUMsSUFBSSxFQUFDLFNBQVMsRUFBQyxJQUFJLEVBQUMsU0FBUyxFQUFDLFNBQVMsRUFBQyw2REFBNEIsRUFBQyxZQUFZLEVBQUMsSUFBSSxFQUFDO3dCQUN4RixFQUFDLElBQUksRUFBQyxhQUFhLEVBQUMsSUFBSSxFQUFDLGFBQWEsRUFBQyxTQUFTLEVBQUMsNkNBQW9CLEVBQUM7cUJBRXpFLENBQUM7O2dDQUFBO2dCQUdGLG1CQUFDO1lBQUQsQ0FGQSxBQUVDLElBQUE7WUFGRCx1Q0FFQyxDQUFBIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge01vdmllc0NhcmRDb250YWluZXJDb21wb25lbnR9IGZyb20gJy4vY29tcG9uZW50cy9tb3ZpZS1jYXJkLWNvbnRhaW5lci1jb21wb25lbnQvbW92aWUtY2FyZC1jb250YWluZXIuY29tcG9uZW50JztcbmltcG9ydCB7TW92aWVEZXRhaWxDb21wb25lbnR9IGZyb20gJy4vY29tcG9uZW50cy9tb3ZpZS1kZXRhaWwtY29tcG9uZW50L21vdmllLWRldGFpbC5jb21wb25lbnQnO1xuaW1wb3J0IHtST1VURVJfUFJPVklERVJTLFJvdXRlQ29uZmlnLFJPVVRFUl9ESVJFQ1RJVkVTfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInOyAgICBcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1hcHAnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgPGRpdj5cbiAgICAgICAgPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxuICAgIDwvZGl2PlxuICAgIGAsXG4gICAgZGlyZWN0aXZlczpbTW92aWVzQ2FyZENvbnRhaW5lckNvbXBvbmVudCxST1VURVJfRElSRUNUSVZFU10sXG4gICAgcHJvdmlkZXJzOltST1VURVJfUFJPVklERVJTXSxcbn0pXG5AUm91dGVDb25maWcoW1xuICAgIHtwYXRoOicvbW92aWVzJyxuYW1lOidXZWxjb21lJyxjb21wb25lbnQ6TW92aWVzQ2FyZENvbnRhaW5lckNvbXBvbmVudCx1c2VBc0RlZmF1bHQ6dHJ1ZX0sXG4gICAge3BhdGg6Jy9tb3ZpZS86a2V5JyxuYW1lOidNb3ZpZURldGFpbCcsY29tcG9uZW50Ok1vdmllRGV0YWlsQ29tcG9uZW50fVxuICAgIFxuXSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuXG59XG5cbiJdfQ==
