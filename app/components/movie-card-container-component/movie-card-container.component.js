System.register(['angular2/core', '../movie-card-component/movie-card.component', '../../model/movie.mock-data', '../header-component/header.component'], function(exports_1, context_1) {
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
    var core_1, movie_card_component_1, movie_mock_data_1, header_component_1;
    var MoviesCardContainerComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (movie_card_component_1_1) {
                movie_card_component_1 = movie_card_component_1_1;
            },
            function (movie_mock_data_1_1) {
                movie_mock_data_1 = movie_mock_data_1_1;
            },
            function (header_component_1_1) {
                header_component_1 = header_component_1_1;
            }],
        execute: function() {
            MoviesCardContainerComponent = (function () {
                function MoviesCardContainerComponent() {
                }
                MoviesCardContainerComponent.prototype.onSearchTermChanged = function (term) {
                    console.log(term);
                    if (this.moviesMetaData) {
                        this.moviesArray = [];
                        console.log(this.moviesMetaData);
                        for (var i = 0; i < this.moviesMetaData.length; i++) {
                            if (this.moviesMetaData[i].name.toLowerCase().indexOf(term.toLowerCase()) > -1) {
                                this.moviesArray.push(this.moviesMetaData[i]);
                            }
                        }
                    }
                };
                MoviesCardContainerComponent.prototype.ngOnInit = function () {
                    this.moviesMetaData = movie_mock_data_1.movies;
                    this.moviesArray = movie_mock_data_1.movies;
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], MoviesCardContainerComponent.prototype, "searchTerm", void 0);
                MoviesCardContainerComponent = __decorate([
                    core_1.Component({
                        selector: 'movies-card-container',
                        templateUrl: 'dev/components/movie-card-container-component/movie-card-container.component.html',
                        styleUrls: ['dev/components/movie-card-container-component/movie-card-container.component.css'],
                        directives: [movie_card_component_1.MovieCardComponent, header_component_1.HeaderComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], MoviesCardContainerComponent);
                return MoviesCardContainerComponent;
            }());
            exports_1("MoviesCardContainerComponent", MoviesCardContainerComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbW92aWUtY2FyZC1jb250YWluZXItY29tcG9uZW50L21vdmllLWNhcmQtY29udGFpbmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVVBO2dCQUFBO2dCQXdCQSxDQUFDO2dCQWxCRCwwREFBbUIsR0FBbkIsVUFBb0IsSUFBVztvQkFDM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDZCxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUEsQ0FBQzt3QkFDcEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7d0JBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO3dCQUNyQyxHQUFHLENBQUEsQ0FBQyxJQUFJLENBQUMsR0FBQyxDQUFDLEVBQUMsQ0FBQyxHQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFDLENBQUMsRUFBRSxFQUFDLENBQUM7NEJBQzFDLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBLENBQUM7Z0NBQ3pFLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs0QkFDbEQsQ0FBQzt3QkFDTCxDQUFDO29CQUNMLENBQUM7Z0JBQ0QsQ0FBQztnQkFHTCwrQ0FBUSxHQUFSO29CQUNJLElBQUksQ0FBQyxjQUFjLEdBQUcsd0JBQU0sQ0FBQztvQkFDN0IsSUFBSSxDQUFDLFdBQVcsR0FBRyx3QkFBTSxDQUFDO2dCQUM5QixDQUFDO2dCQW5CQTtvQkFBQyxZQUFLLEVBQUU7O2dGQUFBO2dCQVZUO29CQUFDLGdCQUFTLENBQUM7d0JBQ1QsUUFBUSxFQUFFLHVCQUF1Qjt3QkFDakMsV0FBVyxFQUFFLG1GQUFtRjt3QkFDaEcsU0FBUyxFQUFDLENBQUMsa0ZBQWtGLENBQUM7d0JBQzdGLFVBQVUsRUFBQyxDQUFDLHlDQUFrQixFQUFDLGtDQUFlLENBQUM7cUJBQ2pELENBQUM7O2dEQUFBO2dCQXlCRixtQ0FBQztZQUFELENBeEJBLEFBd0JDLElBQUE7WUF4QkQsdUVBd0JDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9tb3ZpZS1jYXJkLWNvbnRhaW5lci1jb21wb25lbnQvbW92aWUtY2FyZC1jb250YWluZXIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsT25Jbml0LElucHV0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7TW92aWVDYXJkQ29tcG9uZW50fSBmcm9tICcuLi9tb3ZpZS1jYXJkLWNvbXBvbmVudC9tb3ZpZS1jYXJkLmNvbXBvbmVudCc7XG5pbXBvcnQge21vdmllc30gZnJvbSAnLi4vLi4vbW9kZWwvbW92aWUubW9jay1kYXRhJztcbmltcG9ydCB7SGVhZGVyQ29tcG9uZW50fSBmcm9tICcuLi9oZWFkZXItY29tcG9uZW50L2hlYWRlci5jb21wb25lbnQnO1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbW92aWVzLWNhcmQtY29udGFpbmVyJyxcbiAgdGVtcGxhdGVVcmw6ICdkZXYvY29tcG9uZW50cy9tb3ZpZS1jYXJkLWNvbnRhaW5lci1jb21wb25lbnQvbW92aWUtY2FyZC1jb250YWluZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6WydkZXYvY29tcG9uZW50cy9tb3ZpZS1jYXJkLWNvbnRhaW5lci1jb21wb25lbnQvbW92aWUtY2FyZC1jb250YWluZXIuY29tcG9uZW50LmNzcyddLFxuICAgZGlyZWN0aXZlczpbTW92aWVDYXJkQ29tcG9uZW50LEhlYWRlckNvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgTW92aWVzQ2FyZENvbnRhaW5lckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbm1vdmllc0FycmF5OmFueVtdO1xubW92aWVzTWV0YURhdGE6YW55W107XG4gQElucHV0KCkgc2VhcmNoVGVybTpzdHJpbmc7XG5cbm9uU2VhcmNoVGVybUNoYW5nZWQodGVybTpzdHJpbmcpOnZvaWR7XG4gICAgY29uc29sZS5sb2codGVybSk7XG4gICAgICAgIGlmKHRoaXMubW92aWVzTWV0YURhdGEpe1xuICAgICAgICAgICAgdGhpcy5tb3ZpZXNBcnJheSA9IFtdO1xuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5tb3ZpZXNNZXRhRGF0YSk7XG4gICAgICAgIGZvcih2YXIgaT0wO2k8dGhpcy5tb3ZpZXNNZXRhRGF0YS5sZW5ndGg7aSsrKXtcbiAgICAgICAgICAgIGlmKHRoaXMubW92aWVzTWV0YURhdGFbaV0ubmFtZS50b0xvd2VyQ2FzZSgpLmluZGV4T2YodGVybS50b0xvd2VyQ2FzZSgpKT4tMSl7XG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZpZXNBcnJheS5wdXNoKHRoaXMubW92aWVzTWV0YURhdGFbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIH1cblxuXG5uZ09uSW5pdCgpOnZvaWR7XG4gICAgdGhpcy5tb3ZpZXNNZXRhRGF0YSA9IG1vdmllcztcbiAgICB0aGlzLm1vdmllc0FycmF5ID0gbW92aWVzO1xufVxufVxuIl19
