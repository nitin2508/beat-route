System.register(['angular2/core', 'angular2/router', '../../model/movie.mock-data'], function(exports_1, context_1) {
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
    var core_1, router_1, movie_mock_data_1, router_2;
    var MovieDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            },
            function (movie_mock_data_1_1) {
                movie_mock_data_1 = movie_mock_data_1_1;
            }],
        execute: function() {
            MovieDetailComponent = (function () {
                function MovieDetailComponent(_routeParams) {
                    this._routeParams = _routeParams;
                    var key = this._routeParams.get('key');
                    console.log(key);
                    for (var i = 0; i < movie_mock_data_1.movies.length; i++) {
                        if (movie_mock_data_1.movies[i].key === key) {
                            this.movie = movie_mock_data_1.movies[i];
                            break;
                        }
                    }
                    console.log(this.movie);
                }
                MovieDetailComponent = __decorate([
                    core_1.Component({
                        selector: 'movie-detail',
                        templateUrl: 'dev/components/movie-detail-component/movie-detail.component.html',
                        styleUrls: ['dev/components/movie-detail-component/movie-detail.component.css'],
                        directives: [router_2.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [router_1.RouteParams])
                ], MovieDetailComponent);
                return MovieDetailComponent;
            }());
            exports_1("MovieDetailComponent", MovieDetailComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbW92aWUtZGV0YWlsLWNvbXBvbmVudC9tb3ZpZS1kZXRhaWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVVBO2dCQUdDLDhCQUFvQixZQUF3QjtvQkFBeEIsaUJBQVksR0FBWixZQUFZLENBQVk7b0JBQzFDLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUN2QyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUNqQixHQUFHLENBQUEsQ0FBQyxJQUFJLENBQUMsR0FBQyxDQUFDLEVBQUMsQ0FBQyxHQUFDLHdCQUFNLENBQUMsTUFBTSxFQUFDLENBQUMsRUFBRSxFQUFDLENBQUM7d0JBQy9CLEVBQUUsQ0FBQSxDQUFDLHdCQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFJLEdBQUcsQ0FBQyxDQUFBLENBQUM7NEJBQ3ZCLElBQUksQ0FBQyxLQUFLLEdBQUcsd0JBQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQzs0QkFDdkIsS0FBSyxDQUFDO3dCQUNSLENBQUM7b0JBQ0gsQ0FBQztvQkFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDMUIsQ0FBQztnQkFuQkY7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDVCxRQUFRLEVBQUUsY0FBYzt3QkFDeEIsV0FBVyxFQUFFLG1FQUFtRTt3QkFDaEYsU0FBUyxFQUFDLENBQUMsa0VBQWtFLENBQUM7d0JBQzlFLFVBQVUsRUFBQyxDQUFDLDBCQUFpQixDQUFDO3FCQUMvQixDQUFDOzt3Q0FBQTtnQkFlRiwyQkFBQztZQUFELENBZEEsQUFjQyxJQUFBO1lBZEQsdURBY0MsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL21vdmllLWRldGFpbC1jb21wb25lbnQvbW92aWUtZGV0YWlsLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LElucHV0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7Um91dGVQYXJhbXN9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5pbXBvcnQge21vdmllc30gZnJvbSAnLi4vLi4vbW9kZWwvbW92aWUubW9jay1kYXRhJztcbmltcG9ydCB7Uk9VVEVSX0RJUkVDVElWRVN9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7IFxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbW92aWUtZGV0YWlsJyxcbiAgdGVtcGxhdGVVcmw6ICdkZXYvY29tcG9uZW50cy9tb3ZpZS1kZXRhaWwtY29tcG9uZW50L21vdmllLWRldGFpbC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczpbJ2Rldi9jb21wb25lbnRzL21vdmllLWRldGFpbC1jb21wb25lbnQvbW92aWUtZGV0YWlsLmNvbXBvbmVudC5jc3MnXSxcbiAgZGlyZWN0aXZlczpbUk9VVEVSX0RJUkVDVElWRVNdXG59KVxuZXhwb3J0IGNsYXNzIE1vdmllRGV0YWlsQ29tcG9uZW50ICB7XG5cbiAgbW92aWU6YW55W107XG4gY29uc3RydWN0b3IocHJpdmF0ZSBfcm91dGVQYXJhbXM6Um91dGVQYXJhbXMpe1xuICAgbGV0IGtleSA9IHRoaXMuX3JvdXRlUGFyYW1zLmdldCgna2V5Jyk7XG4gICBjb25zb2xlLmxvZyhrZXkpO1xuICAgZm9yKHZhciBpPTA7aTxtb3ZpZXMubGVuZ3RoO2krKyl7XG4gICAgIGlmKG1vdmllc1tpXS5rZXkgPT09a2V5KXtcbiAgICAgICB0aGlzLm1vdmllID0gbW92aWVzW2ldO1xuICAgICAgIGJyZWFrO1xuICAgICB9XG4gICB9XG4gICBjb25zb2xlLmxvZyh0aGlzLm1vdmllKTtcbiB9XG59XG4iXX0=
