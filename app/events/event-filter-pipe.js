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
    var EventFilterPipe;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            EventFilterPipe = (function () {
                function EventFilterPipe() {
                }
                EventFilterPipe.prototype.transform = function (value, args) {
                    var filter = args[0] ? args[0].toLowerCase() : null;
                    // console.log(value);
                    // console.log(args)
                    // return value;
                    // //
                    return filter ? value.filter(function (event) {
                        return event.name.toLowerCase().indexOf(filter) != -1;
                    }) : value;
                };
                EventFilterPipe = __decorate([
                    core_1.Pipe({
                        name: 'eventFilter'
                    }), 
                    __metadata('design:paramtypes', [])
                ], EventFilterPipe);
                return EventFilterPipe;
            }());
            exports_1("EventFilterPipe", EventFilterPipe);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV2ZW50cy9ldmVudC1maWx0ZXItcGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQU9BO2dCQUFBO2dCQVVBLENBQUM7Z0JBVEcsbUNBQVMsR0FBVCxVQUFVLEtBQWMsRUFBQyxJQUFhO29CQUNsQyxJQUFJLE1BQU0sR0FBVSxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxHQUFDLElBQUksQ0FBQztvQkFDdkQsc0JBQXNCO29CQUN0QixvQkFBb0I7b0JBQ3BCLGdCQUFnQjtvQkFDaEIsS0FBSztvQkFDTCxNQUFNLENBQUMsTUFBTSxHQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBQyxLQUFZO3dCQUN4QyxPQUFBLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFHLENBQUMsQ0FBQztvQkFBN0MsQ0FBNkMsQ0FBQyxHQUFDLEtBQUssQ0FBQztnQkFDekQsQ0FBQztnQkFiTDtvQkFBQyxXQUFJLENBQUM7d0JBQ0YsSUFBSSxFQUFDLGFBQWE7cUJBQ3JCLENBQUM7O21DQUFBO2dCQVlGLHNCQUFDO1lBQUQsQ0FWQSxBQVVDLElBQUE7WUFWRCw2Q0FVQyxDQUFBIiwiZmlsZSI6ImV2ZW50cy9ldmVudC1maWx0ZXItcGlwZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UGlwZSxQaXBlVHJhbnNmb3JtfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7SUV2ZW50fSBmcm9tICcuL2V2ZW50JztcblxuQFBpcGUoe1xuICAgIG5hbWU6J2V2ZW50RmlsdGVyJ1xufSlcblxuZXhwb3J0IGNsYXNzIEV2ZW50RmlsdGVyUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm17XG4gICAgdHJhbnNmb3JtKHZhbHVlOklFdmVudFtdLGFyZ3M6c3RyaW5nW10pOklFdmVudFtde1xuICAgICAgICBsZXQgZmlsdGVyOnN0cmluZyA9IGFyZ3NbMF0/YXJnc1swXS50b0xvd2VyQ2FzZSgpOm51bGw7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHZhbHVlKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coYXJncylcbiAgICAgICAgLy8gcmV0dXJuIHZhbHVlO1xuICAgICAgICAvLyAvL1xuICAgICAgICByZXR1cm4gZmlsdGVyP3ZhbHVlLmZpbHRlcigoZXZlbnQ6SUV2ZW50KT0+XG4gICAgICAgIGV2ZW50Lm5hbWUudG9Mb3dlckNhc2UoKS5pbmRleE9mKGZpbHRlcikgIT0tMSk6dmFsdWU7XG4gICAgfVxufVxuIl19
