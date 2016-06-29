System.register(['@angular/core'], function(exports_1, context_1) {
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
    var MyComponentComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            MyComponentComponent = (function () {
                function MyComponentComponent() {
                    this.name = "Adrian";
                    this.keyPress = function (input) {
                        console.log(input);
                    };
                }
                MyComponentComponent = __decorate([
                    core_1.Component({
                        selector: 'my-component',
                        template: "\n        <h1>by:  Adrian Pedro Zelada Torrez </h1> \n        <p [class.is-rule]=\"inputElement.value==='adrian'\">{{name}}</p>\n        <br>\n        <br>\n        <input type=\"text\" #inputElement (keyup)=\"keyPress(inputElement)\">\n        <br>\n        <br>\n        <button [disabled]=\"inputElement.value!=='adrian'\"> Press </button>        \n    ",
                        styleUrls: ['src/css/mycomponent.css']
                    }), 
                    __metadata('design:paramtypes', [])
                ], MyComponentComponent);
                return MyComponentComponent;
            }());
            exports_1("MyComponentComponent", MyComponentComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15LWNvbXBvbmVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFtQkE7Z0JBQUE7b0JBQ0ksU0FBSSxHQUFDLFFBQVEsQ0FBQztvQkFDZCxhQUFRLEdBQUMsVUFBUyxLQUFLO3dCQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFBO29CQUV0QixDQUFDLENBQUE7Z0JBQ0wsQ0FBQztnQkFyQkQ7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUMsY0FBYzt3QkFDdkIsUUFBUSxFQUFDLHNXQVNSO3dCQUNELFNBQVMsRUFBQyxDQUFDLHlCQUF5QixDQUFDO3FCQUN4QyxDQUFDOzt3Q0FBQTtnQkFRRiwyQkFBQztZQUFELENBTkEsQUFNQyxJQUFBO1lBTkQsdURBTUMsQ0FBQSIsImZpbGUiOiJteS1jb21wb25lbnQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6J215LWNvbXBvbmVudCcsXG4gICAgdGVtcGxhdGU6YFxuICAgICAgICA8aDE+Ynk6ICBBZHJpYW4gUGVkcm8gWmVsYWRhIFRvcnJleiA8L2gxPiBcbiAgICAgICAgPHAgW2NsYXNzLmlzLXJ1bGVdPVwiaW5wdXRFbGVtZW50LnZhbHVlPT09J2FkcmlhbidcIj57e25hbWV9fTwvcD5cbiAgICAgICAgPGJyPlxuICAgICAgICA8YnI+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiICNpbnB1dEVsZW1lbnQgKGtleXVwKT1cImtleVByZXNzKGlucHV0RWxlbWVudClcIj5cbiAgICAgICAgPGJyPlxuICAgICAgICA8YnI+XG4gICAgICAgIDxidXR0b24gW2Rpc2FibGVkXT1cImlucHV0RWxlbWVudC52YWx1ZSE9PSdhZHJpYW4nXCI+IFByZXNzIDwvYnV0dG9uPiAgICAgICAgXG4gICAgYCxcbiAgICBzdHlsZVVybHM6WydzcmMvY3NzL215Y29tcG9uZW50LmNzcyddXG59KVxuXG5leHBvcnQgY2xhc3MgTXlDb21wb25lbnRDb21wb25lbnR7XG4gICAgbmFtZT1cIkFkcmlhblwiO1xuICAgIGtleVByZXNzPWZ1bmN0aW9uKGlucHV0KXtcbiAgICAgICAgY29uc29sZS5sb2coaW5wdXQpXG5cbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
