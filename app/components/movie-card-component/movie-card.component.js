System.register(['angular2/core', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, router_1;
    var MovieCardComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            MovieCardComponent = (function () {
                function MovieCardComponent() {
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Array)
                ], MovieCardComponent.prototype, "movie", void 0);
                MovieCardComponent = __decorate([
                    core_1.Component({
                        selector: 'movie-card',
                        templateUrl: 'dev/components/movie-card-component/movie-card.component.html',
                        styleUrls: ['dev/components/movie-card-component/movie-card.component.css'],
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], MovieCardComponent);
                return MovieCardComponent;
            }());
            exports_1("MovieCardComponent", MovieCardComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbW92aWUtY2FyZC1jb21wb25lbnQvbW92aWUtY2FyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFTQTtnQkFBQTtnQkFFQSxDQUFDO2dCQURBO29CQUFDLFlBQUssRUFBRTs7aUVBQUE7Z0JBUFQ7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDVCxRQUFRLEVBQUUsWUFBWTt3QkFDdEIsV0FBVyxFQUFFLCtEQUErRDt3QkFDNUUsU0FBUyxFQUFDLENBQUMsOERBQThELENBQUM7d0JBQzFFLFVBQVUsRUFBQyxDQUFDLDBCQUFpQixDQUFDO3FCQUMvQixDQUFDOztzQ0FBQTtnQkFHRix5QkFBQztZQUFELENBRkEsQUFFQyxJQUFBO1lBRkQsbURBRUMsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL21vdmllLWNhcmQtY29tcG9uZW50L21vdmllLWNhcmQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsSW5wdXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtST1VURVJfRElSRUNUSVZFU30gZnJvbSAnYW5ndWxhcjIvcm91dGVyJzsgICBcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbW92aWUtY2FyZCcsXG4gIHRlbXBsYXRlVXJsOiAnZGV2L2NvbXBvbmVudHMvbW92aWUtY2FyZC1jb21wb25lbnQvbW92aWUtY2FyZC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczpbJ2Rldi9jb21wb25lbnRzL21vdmllLWNhcmQtY29tcG9uZW50L21vdmllLWNhcmQuY29tcG9uZW50LmNzcyddLFxuICBkaXJlY3RpdmVzOltST1VURVJfRElSRUNUSVZFU11cbn0pXG5leHBvcnQgY2xhc3MgTW92aWVDYXJkQ29tcG9uZW50ICB7XG4gQElucHV0KCkgbW92aWU6YW55W107XG59XG4iXX0=
