System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var ThumbComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ThumbComponent = (function () {
                function ThumbComponent() {
                    this.ratingClicked = new core_1.EventEmitter();
                }
                ThumbComponent.prototype.onClick = function () {
                    console.log('clicked');
                    console.log(this.rating);
                    this.ratingClicked.emit("The rating " + this.rating + " was clicked");
                };
                ThumbComponent.prototype.ngOnChanges = function () {
                    this.thumbWidth = (this.rating * 86) / 5;
                    console.log(this.thumbWidth);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], ThumbComponent.prototype, "rating", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], ThumbComponent.prototype, "ratingClicked", void 0);
                ThumbComponent = __decorate([
                    core_1.Component({
                        selector: 'thumb',
                        templateUrl: 'dev/thumb-component/thumb.component.html',
                        styleUrls: ['dev/thumb-component/thumb.component.css']
                    }), 
                    __metadata('design:paramtypes', [])
                ], ThumbComponent);
                return ThumbComponent;
            }());
            exports_1("ThumbComponent", ThumbComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRodW1iLWNvbXBvbmVudC90aHVtYi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFTQTtnQkFBQTtvQkFJYyxrQkFBYSxHQUFzQixJQUFJLG1CQUFZLEVBQVUsQ0FBQztnQkFZNUUsQ0FBQztnQkFWRyxnQ0FBTyxHQUFQO29CQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7b0JBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUN6QixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxnQkFBYyxJQUFJLENBQUMsTUFBTSxpQkFBYyxDQUFDLENBQUM7Z0JBQ3JFLENBQUM7Z0JBQ0Qsb0NBQVcsR0FBWDtvQkFDSSxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBQyxFQUFFLENBQUMsR0FBQyxDQUFDLENBQUM7b0JBQ3JDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUNqQyxDQUFDO2dCQWJEO29CQUFDLFlBQUssRUFBRTs7OERBQUE7Z0JBR1I7b0JBQUMsYUFBTSxFQUFFOztxRUFBQTtnQkFYYjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBQyxPQUFPO3dCQUNoQixXQUFXLEVBQUMsMENBQTBDO3dCQUN0RCxTQUFTLEVBQUMsQ0FBQyx5Q0FBeUMsQ0FBQztxQkFFeEQsQ0FBQzs7a0NBQUE7Z0JBa0JGLHFCQUFDO1lBQUQsQ0FoQkEsQUFnQkMsSUFBQTtZQWhCRCwyQ0FnQkMsQ0FBQSIsImZpbGUiOiJ0aHVtYi1jb21wb25lbnQvdGh1bWIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsT25DaGFuZ2VzLElucHV0LE91dHB1dCxFdmVudEVtaXR0ZXJ9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjondGh1bWInLFxuICAgIHRlbXBsYXRlVXJsOidkZXYvdGh1bWItY29tcG9uZW50L3RodW1iLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6WydkZXYvdGh1bWItY29tcG9uZW50L3RodW1iLmNvbXBvbmVudC5jc3MnXVxuXG59KVxuXG5leHBvcnQgY2xhc3MgVGh1bWJDb21wb25lbnR7XG4gICAgQElucHV0KCkgcmF0aW5nOm51bWJlcjtcbiAgICB0aHVtYldpZHRoOm51bWJlcjtcblxuICAgIEBPdXRwdXQoKSByYXRpbmdDbGlja2VkOmV2ZW50RW1pdHRlcjxzdHJpbmc+IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuXG4gICAgb25DbGljaygpOnZvaWR7XG4gICAgICAgIGNvbnNvbGUubG9nKCdjbGlja2VkJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucmF0aW5nKTtcbiAgICAgICAgdGhpcy5yYXRpbmdDbGlja2VkLmVtaXQoYFRoZSByYXRpbmcgJHt0aGlzLnJhdGluZ30gd2FzIGNsaWNrZWRgKTtcbiAgICB9XG4gICAgbmdPbkNoYW5nZXMoKTp2b2lke1xuICAgICAgICB0aGlzLnRodW1iV2lkdGggPSAodGhpcy5yYXRpbmcqODYpLzU7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMudGh1bWJXaWR0aCk7XG4gICAgfVxuXG59XG4iXX0=
