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
    var HeaderComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            HeaderComponent = (function () {
                function HeaderComponent() {
                    this.searchTermChanged = new core_1.EventEmitter();
                    this.searchText = '';
                }
                HeaderComponent.prototype.searchMovies = function () {
                    this.searchTermChanged.emit(this.searchText);
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], HeaderComponent.prototype, "searchTermChanged", void 0);
                HeaderComponent = __decorate([
                    core_1.Component({
                        selector: 'header',
                        templateUrl: 'dev/components/header-component/header.component.html',
                        styleUrls: ['dev/components/header-component/header.component.css'],
                    }), 
                    __metadata('design:paramtypes', [])
                ], HeaderComponent);
                return HeaderComponent;
            }());
            exports_1("HeaderComponent", HeaderComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaGVhZGVyLWNvbXBvbmVudC9oZWFkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBT0E7Z0JBQUE7b0JBQ1ksc0JBQWlCLEdBQXNCLElBQUksbUJBQVksRUFBVSxDQUFDO29CQUMxRSxlQUFVLEdBQVMsRUFBRSxDQUFDO2dCQU0xQixDQUFDO2dCQUxHLHNDQUFZLEdBQVo7b0JBQ0UsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQy9DLENBQUM7Z0JBSkg7b0JBQUMsYUFBTSxFQUFFOzswRUFBQTtnQkFOWDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNULFFBQVEsRUFBRSxRQUFRO3dCQUNsQixXQUFXLEVBQUUsdURBQXVEO3dCQUNwRSxTQUFTLEVBQUMsQ0FBQyxzREFBc0QsQ0FBQztxQkFDbkUsQ0FBQzs7bUNBQUE7Z0JBU0Ysc0JBQUM7WUFBRCxDQVJBLEFBUUMsSUFBQTtZQVJELDZDQVFDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9oZWFkZXItY29tcG9uZW50L2hlYWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCxPdXRwdXQsRXZlbnRFbWl0dGVyfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaGVhZGVyJyxcbiAgdGVtcGxhdGVVcmw6ICdkZXYvY29tcG9uZW50cy9oZWFkZXItY29tcG9uZW50L2hlYWRlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczpbJ2Rldi9jb21wb25lbnRzL2hlYWRlci1jb21wb25lbnQvaGVhZGVyLmNvbXBvbmVudC5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgSGVhZGVyQ29tcG9uZW50ICB7XG4gIEBPdXRwdXQoKSBzZWFyY2hUZXJtQ2hhbmdlZDpldmVudEVtaXR0ZXI8c3RyaW5nPiBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcbiAgICBzZWFyY2hUZXh0OnN0cmluZyA9Jyc7XG4gICAgc2VhcmNoTW92aWVzKCk6dm9pZHtcbiAgICAgIHRoaXMuc2VhcmNoVGVybUNoYW5nZWQuZW1pdCh0aGlzLnNlYXJjaFRleHQpO1xuICAgIH1cbiAgICAgXG5cbn1cbiJdfQ==
