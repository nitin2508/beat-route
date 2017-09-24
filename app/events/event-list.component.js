System.register(['angular2/core', './event-filter-pipe', '../thumb-component/thumb.component', './event.service'], function(exports_1, context_1) {
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
    var core_1, event_filter_pipe_1, thumb_component_1, event_service_1;
    var EventListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (event_filter_pipe_1_1) {
                event_filter_pipe_1 = event_filter_pipe_1_1;
            },
            function (thumb_component_1_1) {
                thumb_component_1 = thumb_component_1_1;
            },
            function (event_service_1_1) {
                event_service_1 = event_service_1_1;
            }],
        execute: function() {
            EventListComponent = (function () {
                function EventListComponent(_eventService) {
                    this._eventService = _eventService;
                    this.pageTitle = 'Events List';
                    this.imageWidth = 50;
                    this.imageMargin = 50;
                    this.showImage = false;
                    this.searchCriteria = '';
                }
                EventListComponent.prototype.toggleImage = function () {
                    this.showImage = !this.showImage;
                };
                EventListComponent.prototype.ngOnInit = function () {
                    this.events = this._eventService.getEvents();
                };
                EventListComponent.prototype.onRatingClicked = function (message) {
                    this.pageTitle = 'eventList ; ' + message;
                };
                EventListComponent = __decorate([
                    core_1.Component({
                        selector: 'el-events',
                        templateUrl: 'dev/events/event-list.component.html',
                        styleUrls: ['dev/events/event-list.component.css'],
                        pipes: [event_filter_pipe_1.EventFilterPipe],
                        directives: [thumb_component_1.ThumbComponent]
                    }), 
                    __metadata('design:paramtypes', [event_service_1.EventService])
                ], EventListComponent);
                return EventListComponent;
            }());
            exports_1("EventListComponent", EventListComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV2ZW50cy9ldmVudC1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVlBO2dCQVNFLDRCQUFvQixhQUEwQjtvQkFBMUIsa0JBQWEsR0FBYixhQUFhLENBQWE7b0JBUDlDLGNBQVMsR0FBVyxhQUFhLENBQUM7b0JBQ2xDLGVBQVUsR0FBVSxFQUFFLENBQUM7b0JBQ3ZCLGdCQUFXLEdBQVUsRUFBRSxDQUFDO29CQUN4QixjQUFTLEdBQVcsS0FBSyxDQUFDO29CQUMxQixtQkFBYyxHQUFVLEVBQUUsQ0FBQztnQkFLM0IsQ0FBQztnQkFHQyx3Q0FBVyxHQUFYO29CQUNJLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO2dCQUNyQyxDQUFDO2dCQUNELHFDQUFRLEdBQVI7b0JBQ0csSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsRUFBRSxDQUFDO2dCQUNoRCxDQUFDO2dCQUNELDRDQUFlLEdBQWYsVUFBZ0IsT0FBYztvQkFDMUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxjQUFjLEdBQUMsT0FBTyxDQUFDO2dCQUM1QyxDQUFDO2dCQTdCTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNULFFBQVEsRUFBRSxXQUFXO3dCQUNyQixXQUFXLEVBQUUsc0NBQXNDO3dCQUNuRCxTQUFTLEVBQUMsQ0FBQyxxQ0FBcUMsQ0FBQzt3QkFDakQsS0FBSyxFQUFDLENBQUMsbUNBQWUsQ0FBQzt3QkFDdkIsVUFBVSxFQUFDLENBQUMsZ0NBQWMsQ0FBQztxQkFDNUIsQ0FBQzs7c0NBQUE7Z0JBd0JGLHlCQUFDO1lBQUQsQ0F2QkEsQUF1QkMsSUFBQTtZQXZCRCxtREF1QkMsQ0FBQSIsImZpbGUiOiJldmVudHMvZXZlbnQtbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCxPbkluaXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0e0lFdmVudH0gZnJvbSAnLi9ldmVudCc7XG5pbXBvcnQge0V2ZW50RmlsdGVyUGlwZX0gZnJvbSAnLi9ldmVudC1maWx0ZXItcGlwZSc7XG5pbXBvcnQge1RodW1iQ29tcG9uZW50fSBmcm9tICcuLi90aHVtYi1jb21wb25lbnQvdGh1bWIuY29tcG9uZW50JztcbmltcG9ydCB7RXZlbnRTZXJ2aWNlfSBmcm9tICcuL2V2ZW50LnNlcnZpY2UnO1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZWwtZXZlbnRzJyxcbiAgdGVtcGxhdGVVcmw6ICdkZXYvZXZlbnRzL2V2ZW50LWxpc3QuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6WydkZXYvZXZlbnRzL2V2ZW50LWxpc3QuY29tcG9uZW50LmNzcyddLFxuICBwaXBlczpbRXZlbnRGaWx0ZXJQaXBlXSxcbiAgZGlyZWN0aXZlczpbVGh1bWJDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIEV2ZW50TGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgcGFnZVRpdGxlOiBzdHJpbmcgPSAnRXZlbnRzIExpc3QnO1xuICBpbWFnZVdpZHRoOm51bWJlciA9IDUwO1xuICBpbWFnZU1hcmdpbjpudW1iZXIgPSA1MDtcbiAgc2hvd0ltYWdlOmJvb2xlYW4gPSBmYWxzZTtcbiAgc2VhcmNoQ3JpdGVyaWE6c3RyaW5nID0gJyc7XG4gIGV2ZW50czpJRXZlbnRbXTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9ldmVudFNlcnZpY2U6RXZlbnRTZXJ2aWNlKXtcblxuICB9XG5cblxuICAgIHRvZ2dsZUltYWdlKCk6dm9pZHtcbiAgICAgICAgdGhpcy5zaG93SW1hZ2UgPSAhdGhpcy5zaG93SW1hZ2U7XG4gICAgfVxuICAgIG5nT25Jbml0KCk6dm9pZHtcbiAgICAgICB0aGlzLmV2ZW50cyA9IHRoaXMuX2V2ZW50U2VydmljZS5nZXRFdmVudHMoKTtcbiAgICB9XG4gICAgb25SYXRpbmdDbGlja2VkKG1lc3NhZ2U6c3RyaW5nKTp2b2lke1xuICAgICAgICB0aGlzLnBhZ2VUaXRsZSA9ICdldmVudExpc3QgOyAnK21lc3NhZ2U7XG4gICAgfVxufVxuIl19
