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
    var EventService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            EventService = (function () {
                function EventService() {
                }
                // constructor(private _http:Http){
                // }
                EventService.prototype.getEvents = function () {
                    return [{
                            "name": "Event 1",
                            "code": "Evt100",
                            "description": "The first event",
                            "date": "2016.01.01",
                            "time": "1:00 PM",
                            "duration": "1 Hour",
                            "fee": 1,
                            "rating": 1,
                            "imageUrl": "https://openclipart.org/image/300px/svg_to_png/193230/Tux-at-the-Beach-by-Merlin2525.png",
                            "location": {
                                "streetAddr": "101 Main St.",
                                "city": "Los Angeles",
                                "state": "CA",
                                "zip": "87885",
                                "lon": 0,
                                "lat": 0
                            },
                            "capacity": 100
                        },
                        {
                            "name": "Event 2",
                            "code": "Evt200",
                            "description": "The second event",
                            "date": "2016.02.02",
                            "time": "2:00 PM",
                            "duration": "2 Hours",
                            "fee": 2,
                            "rating": 2,
                            "imageUrl": "https://openclipart.org/image/300px/svg_to_png/221228/Ice-Cream-Beach.png",
                            "location": {
                                "streetAddr": "202 Main St.",
                                "city": "Los Angeles",
                                "state": "CA",
                                "zip": "87885",
                                "lon": 0,
                                "lat": 0
                            },
                            "capacity": 200
                        },
                        {
                            "name": "Event 3",
                            "code": "Evt300",
                            "description": "The third event",
                            "date": "2016.03.03",
                            "time": "3:00 PM",
                            "duration": "3 Hours",
                            "fee": 3,
                            "rating": 3,
                            "imageUrl": "https://openclipart.org/image/300px/svg_to_png/216716/plage-1-REMIX.png",
                            "location": {
                                "streetAddr": "303 Main St.",
                                "city": "Los Angeles",
                                "state": "CA",
                                "zip": "87885",
                                "lon": 0,
                                "lat": 0
                            },
                            "capacity": 300
                        },
                        {
                            "name": "Event 4",
                            "code": "Evt400",
                            "description": "The fourth event",
                            "date": "2016.04.04",
                            "time": "4:00 PM",
                            "duration": "4 Hours",
                            "fee": 4,
                            "rating": 4,
                            "imageUrl": "https://openclipart.org/image/300px/svg_to_png/5351/addon-sandcastle-2.png",
                            "location": {
                                "streetAddr": "404 Main St.",
                                "city": "Los Angeles",
                                "state": "CA",
                                "zip": "87885",
                                "lon": 0,
                                "lat": 0
                            },
                            "capacity": 400
                        }
                    ];
                };
                EventService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], EventService);
                return EventService;
            }());
            exports_1("EventService", EventService);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV2ZW50cy9ldmVudC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBTUE7Z0JBQUE7Z0JBMEZBLENBQUM7Z0JBeEZHLG1DQUFtQztnQkFFbkMsSUFBSTtnQkFFSixnQ0FBUyxHQUFUO29CQUNJLE1BQU0sQ0FBQyxDQUFDOzRCQUNKLE1BQU0sRUFBRSxTQUFTOzRCQUNqQixNQUFNLEVBQUUsUUFBUTs0QkFDaEIsYUFBYSxFQUFFLGlCQUFpQjs0QkFDaEMsTUFBTSxFQUFFLFlBQVk7NEJBQ3BCLE1BQU0sRUFBRSxTQUFTOzRCQUNqQixVQUFVLEVBQUUsUUFBUTs0QkFDcEIsS0FBSyxFQUFFLENBQUM7NEJBQ1IsUUFBUSxFQUFFLENBQUM7NEJBQ1gsVUFBVSxFQUFFLDBGQUEwRjs0QkFDdEcsVUFBVSxFQUFFO2dDQUNSLFlBQVksRUFBRSxjQUFjO2dDQUM1QixNQUFNLEVBQUUsYUFBYTtnQ0FDckIsT0FBTyxFQUFFLElBQUk7Z0NBQ2IsS0FBSyxFQUFFLE9BQU87Z0NBQ2QsS0FBSyxFQUFFLENBQUM7Z0NBQ1IsS0FBSyxFQUFFLENBQUM7NkJBQ1g7NEJBQ0QsVUFBVSxFQUFFLEdBQUc7eUJBQ2xCO3dCQUNEOzRCQUNJLE1BQU0sRUFBRSxTQUFTOzRCQUNqQixNQUFNLEVBQUUsUUFBUTs0QkFDaEIsYUFBYSxFQUFFLGtCQUFrQjs0QkFDakMsTUFBTSxFQUFFLFlBQVk7NEJBQ3BCLE1BQU0sRUFBRSxTQUFTOzRCQUNqQixVQUFVLEVBQUUsU0FBUzs0QkFDckIsS0FBSyxFQUFFLENBQUM7NEJBQ1IsUUFBUSxFQUFFLENBQUM7NEJBQ1gsVUFBVSxFQUFFLDJFQUEyRTs0QkFDdkYsVUFBVSxFQUFFO2dDQUNSLFlBQVksRUFBRSxjQUFjO2dDQUM1QixNQUFNLEVBQUUsYUFBYTtnQ0FDckIsT0FBTyxFQUFFLElBQUk7Z0NBQ2IsS0FBSyxFQUFFLE9BQU87Z0NBQ2QsS0FBSyxFQUFFLENBQUM7Z0NBQ1IsS0FBSyxFQUFFLENBQUM7NkJBQ1g7NEJBQ0QsVUFBVSxFQUFFLEdBQUc7eUJBQ2xCO3dCQUNEOzRCQUNJLE1BQU0sRUFBRSxTQUFTOzRCQUNqQixNQUFNLEVBQUUsUUFBUTs0QkFDaEIsYUFBYSxFQUFFLGlCQUFpQjs0QkFDaEMsTUFBTSxFQUFFLFlBQVk7NEJBQ3BCLE1BQU0sRUFBRSxTQUFTOzRCQUNqQixVQUFVLEVBQUUsU0FBUzs0QkFDckIsS0FBSyxFQUFFLENBQUM7NEJBQ1IsUUFBUSxFQUFFLENBQUM7NEJBQ1gsVUFBVSxFQUFFLHlFQUF5RTs0QkFDckYsVUFBVSxFQUFFO2dDQUNSLFlBQVksRUFBRSxjQUFjO2dDQUM1QixNQUFNLEVBQUUsYUFBYTtnQ0FDckIsT0FBTyxFQUFFLElBQUk7Z0NBQ2IsS0FBSyxFQUFFLE9BQU87Z0NBQ2QsS0FBSyxFQUFFLENBQUM7Z0NBQ1IsS0FBSyxFQUFFLENBQUM7NkJBQ1g7NEJBQ0QsVUFBVSxFQUFFLEdBQUc7eUJBQ2xCO3dCQUNEOzRCQUNJLE1BQU0sRUFBRSxTQUFTOzRCQUNqQixNQUFNLEVBQUUsUUFBUTs0QkFDaEIsYUFBYSxFQUFFLGtCQUFrQjs0QkFDakMsTUFBTSxFQUFFLFlBQVk7NEJBQ3BCLE1BQU0sRUFBRSxTQUFTOzRCQUNqQixVQUFVLEVBQUUsU0FBUzs0QkFDckIsS0FBSyxFQUFFLENBQUM7NEJBQ1IsUUFBUSxFQUFFLENBQUM7NEJBQ1gsVUFBVSxFQUFFLDRFQUE0RTs0QkFDeEYsVUFBVSxFQUFFO2dDQUNSLFlBQVksRUFBRSxjQUFjO2dDQUM1QixNQUFNLEVBQUUsYUFBYTtnQ0FDckIsT0FBTyxFQUFFLElBQUk7Z0NBQ2IsS0FBSyxFQUFFLE9BQU87Z0NBQ2QsS0FBSyxFQUFFLENBQUM7Z0NBQ1IsS0FBSyxFQUFFLENBQUM7NkJBQ1g7NEJBQ0QsVUFBVSxFQUFFLEdBQUc7eUJBQ2xCO3FCQUNBLENBQUM7Z0JBQ04sQ0FBQztnQkExRkw7b0JBQUMsaUJBQVUsRUFBRTs7Z0NBQUE7Z0JBNEZiLG1CQUFDO1lBQUQsQ0ExRkEsQUEwRkMsSUFBQTtZQTFGRCx1Q0EwRkMsQ0FBQSIsImZpbGUiOiJldmVudHMvZXZlbnQuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7IElFdmVudCB9IGZyb20gJy4vZXZlbnQnO1xuaW1wb3J0IHtIdHRwLFJlc3BvbnNlfSBmcm9tICdhbmd1bGFyMi9odHRwJztcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcbkBJbmplY3RhYmxlKClcblxuZXhwb3J0IGNsYXNzIEV2ZW50U2VydmljZSB7XG5cbiAgICAvLyBjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwOkh0dHApe1xuXG4gICAgLy8gfVxuXG4gICAgZ2V0RXZlbnRzKCk6IElFdmVudFtdIHtcbiAgICAgICAgcmV0dXJuIFt7XG4gICAgICAgICAgICBcIm5hbWVcIjogXCJFdmVudCAxXCIsXG4gICAgICAgICAgICBcImNvZGVcIjogXCJFdnQxMDBcIixcbiAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJUaGUgZmlyc3QgZXZlbnRcIixcbiAgICAgICAgICAgIFwiZGF0ZVwiOiBcIjIwMTYuMDEuMDFcIixcbiAgICAgICAgICAgIFwidGltZVwiOiBcIjE6MDAgUE1cIixcbiAgICAgICAgICAgIFwiZHVyYXRpb25cIjogXCIxIEhvdXJcIixcbiAgICAgICAgICAgIFwiZmVlXCI6IDEsXG4gICAgICAgICAgICBcInJhdGluZ1wiOiAxLFxuICAgICAgICAgICAgXCJpbWFnZVVybFwiOiBcImh0dHBzOi8vb3BlbmNsaXBhcnQub3JnL2ltYWdlLzMwMHB4L3N2Z190b19wbmcvMTkzMjMwL1R1eC1hdC10aGUtQmVhY2gtYnktTWVybGluMjUyNS5wbmdcIixcbiAgICAgICAgICAgIFwibG9jYXRpb25cIjoge1xuICAgICAgICAgICAgICAgIFwic3RyZWV0QWRkclwiOiBcIjEwMSBNYWluIFN0LlwiLFxuICAgICAgICAgICAgICAgIFwiY2l0eVwiOiBcIkxvcyBBbmdlbGVzXCIsXG4gICAgICAgICAgICAgICAgXCJzdGF0ZVwiOiBcIkNBXCIsXG4gICAgICAgICAgICAgICAgXCJ6aXBcIjogXCI4Nzg4NVwiLFxuICAgICAgICAgICAgICAgIFwibG9uXCI6IDAsXG4gICAgICAgICAgICAgICAgXCJsYXRcIjogMFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiY2FwYWNpdHlcIjogMTAwXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIkV2ZW50IDJcIixcbiAgICAgICAgICAgIFwiY29kZVwiOiBcIkV2dDIwMFwiLFxuICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlRoZSBzZWNvbmQgZXZlbnRcIixcbiAgICAgICAgICAgIFwiZGF0ZVwiOiBcIjIwMTYuMDIuMDJcIixcbiAgICAgICAgICAgIFwidGltZVwiOiBcIjI6MDAgUE1cIixcbiAgICAgICAgICAgIFwiZHVyYXRpb25cIjogXCIyIEhvdXJzXCIsXG4gICAgICAgICAgICBcImZlZVwiOiAyLFxuICAgICAgICAgICAgXCJyYXRpbmdcIjogMixcbiAgICAgICAgICAgIFwiaW1hZ2VVcmxcIjogXCJodHRwczovL29wZW5jbGlwYXJ0Lm9yZy9pbWFnZS8zMDBweC9zdmdfdG9fcG5nLzIyMTIyOC9JY2UtQ3JlYW0tQmVhY2gucG5nXCIsXG4gICAgICAgICAgICBcImxvY2F0aW9uXCI6IHtcbiAgICAgICAgICAgICAgICBcInN0cmVldEFkZHJcIjogXCIyMDIgTWFpbiBTdC5cIixcbiAgICAgICAgICAgICAgICBcImNpdHlcIjogXCJMb3MgQW5nZWxlc1wiLFxuICAgICAgICAgICAgICAgIFwic3RhdGVcIjogXCJDQVwiLFxuICAgICAgICAgICAgICAgIFwiemlwXCI6IFwiODc4ODVcIixcbiAgICAgICAgICAgICAgICBcImxvblwiOiAwLFxuICAgICAgICAgICAgICAgIFwibGF0XCI6IDBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImNhcGFjaXR5XCI6IDIwMFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcIm5hbWVcIjogXCJFdmVudCAzXCIsXG4gICAgICAgICAgICBcImNvZGVcIjogXCJFdnQzMDBcIixcbiAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJUaGUgdGhpcmQgZXZlbnRcIixcbiAgICAgICAgICAgIFwiZGF0ZVwiOiBcIjIwMTYuMDMuMDNcIixcbiAgICAgICAgICAgIFwidGltZVwiOiBcIjM6MDAgUE1cIixcbiAgICAgICAgICAgIFwiZHVyYXRpb25cIjogXCIzIEhvdXJzXCIsXG4gICAgICAgICAgICBcImZlZVwiOiAzLFxuICAgICAgICAgICAgXCJyYXRpbmdcIjogMyxcbiAgICAgICAgICAgIFwiaW1hZ2VVcmxcIjogXCJodHRwczovL29wZW5jbGlwYXJ0Lm9yZy9pbWFnZS8zMDBweC9zdmdfdG9fcG5nLzIxNjcxNi9wbGFnZS0xLVJFTUlYLnBuZ1wiLFxuICAgICAgICAgICAgXCJsb2NhdGlvblwiOiB7XG4gICAgICAgICAgICAgICAgXCJzdHJlZXRBZGRyXCI6IFwiMzAzIE1haW4gU3QuXCIsXG4gICAgICAgICAgICAgICAgXCJjaXR5XCI6IFwiTG9zIEFuZ2VsZXNcIixcbiAgICAgICAgICAgICAgICBcInN0YXRlXCI6IFwiQ0FcIixcbiAgICAgICAgICAgICAgICBcInppcFwiOiBcIjg3ODg1XCIsXG4gICAgICAgICAgICAgICAgXCJsb25cIjogMCxcbiAgICAgICAgICAgICAgICBcImxhdFwiOiAwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJjYXBhY2l0eVwiOiAzMDBcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJuYW1lXCI6IFwiRXZlbnQgNFwiLFxuICAgICAgICAgICAgXCJjb2RlXCI6IFwiRXZ0NDAwXCIsXG4gICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiVGhlIGZvdXJ0aCBldmVudFwiLFxuICAgICAgICAgICAgXCJkYXRlXCI6IFwiMjAxNi4wNC4wNFwiLFxuICAgICAgICAgICAgXCJ0aW1lXCI6IFwiNDowMCBQTVwiLFxuICAgICAgICAgICAgXCJkdXJhdGlvblwiOiBcIjQgSG91cnNcIixcbiAgICAgICAgICAgIFwiZmVlXCI6IDQsXG4gICAgICAgICAgICBcInJhdGluZ1wiOiA0LFxuICAgICAgICAgICAgXCJpbWFnZVVybFwiOiBcImh0dHBzOi8vb3BlbmNsaXBhcnQub3JnL2ltYWdlLzMwMHB4L3N2Z190b19wbmcvNTM1MS9hZGRvbi1zYW5kY2FzdGxlLTIucG5nXCIsXG4gICAgICAgICAgICBcImxvY2F0aW9uXCI6IHtcbiAgICAgICAgICAgICAgICBcInN0cmVldEFkZHJcIjogXCI0MDQgTWFpbiBTdC5cIixcbiAgICAgICAgICAgICAgICBcImNpdHlcIjogXCJMb3MgQW5nZWxlc1wiLFxuICAgICAgICAgICAgICAgIFwic3RhdGVcIjogXCJDQVwiLFxuICAgICAgICAgICAgICAgIFwiemlwXCI6IFwiODc4ODVcIixcbiAgICAgICAgICAgICAgICBcImxvblwiOiAwLFxuICAgICAgICAgICAgICAgIFwibGF0XCI6IDBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImNhcGFjaXR5XCI6IDQwMFxuICAgICAgICB9XG4gICAgICAgIF07XG4gICAgfVxuXG59Il19
