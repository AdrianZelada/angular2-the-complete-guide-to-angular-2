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
    var PuzzleComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            PuzzleComponent = (function () {
                function PuzzleComponent() {
                }
                PuzzleComponent.prototype.ngOnInit = function () {
                    this.option1Number = Math.round(Math.random());
                    this.option2Number = Math.round(Math.random());
                    this.option3Number = Math.round(Math.random());
                    this.option4Number = Math.round(Math.random());
                    console.log(this.option1Number);
                    console.log(this.option2Number);
                    console.log(this.option3Number);
                    console.log(this.option4Number);
                };
                PuzzleComponent = __decorate([
                    core_1.Component({
                        selector: 'my-puzzle',
                        template: "\n        <section class=\"setup\">\n            Enter your name Please: \n            <input type=\"text\" #name (keyup)=\"0\">\n        </section>\n        <section \n        [ngClass]=\"{\n            puzzle:true,\n            solved: option1.value == option1Number && option2.value == option2Number && option3.value == option3Number && option4.value == option4Number   \n        }\"\n        [ngStyle]=\"{display:name.value==='' ? 'none':'block'}\">\n        \n            <h2>The puzzle | \n            {{option1.value == option1Number && option2.value == option2Number && option3.value == option3Number && option4.value == option4Number ? 'SOLVED':'NOT SOLVED'}}</h2>\n            <p>Welcome <span class=\"name\">{{name.value}}</span></p>\n            <br>\n            Option 1:\n            <input type=\"text\" #option1 (keyup)=\"0\"><br>\n            Option 2:\n            <input type=\"text\" #option2 (keyup)=\"0\"><br>\n            Option 3:\n            <input type=\"text\" #option3 (keyup)=\"0\"><br>\n            Option 4:\n            <input type=\"text\" #option4 (keyup)=\"0\"><br>            \n        </section>\n        <h2 [hidden]=\"option1.value != option1Number || option2.value != option2Number || option3.value != option3Number || option4.value != option4Number\">Congratulation {{name.value}} , you did it!</h2>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], PuzzleComponent);
                return PuzzleComponent;
            }());
            exports_1("PuzzleComponent", PuzzleComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInB1enpsZS9wdXp6bGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBbUNBO2dCQUFBO2dCQW9CQSxDQUFDO2dCQWRHLGtDQUFRLEdBQVI7b0JBQ0ksSUFBSSxDQUFDLGFBQWEsR0FBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO29CQUM5QyxJQUFJLENBQUMsYUFBYSxHQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7b0JBQzlDLElBQUksQ0FBQyxhQUFhLEdBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztvQkFDOUMsSUFBSSxDQUFDLGFBQWEsR0FBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO29CQUU5QyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztvQkFDaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7b0JBQ2hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO29CQUNoQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztnQkFDcEMsQ0FBQztnQkEvQ0w7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUMsV0FBVzt3QkFDcEIsUUFBUSxFQUFDLHMwQ0EwQlI7cUJBQ0osQ0FBQzs7bUNBQUE7Z0JBc0JGLHNCQUFDO1lBQUQsQ0FwQkEsQUFvQkMsSUFBQTtZQXBCRCw2Q0FvQkMsQ0FBQSIsImZpbGUiOiJwdXp6bGUvcHV6emxlLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjonbXktcHV6emxlJyxcbiAgICB0ZW1wbGF0ZTpgXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzPVwic2V0dXBcIj5cbiAgICAgICAgICAgIEVudGVyIHlvdXIgbmFtZSBQbGVhc2U6IFxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgI25hbWUgKGtleXVwKT1cIjBcIj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8c2VjdGlvbiBcbiAgICAgICAgW25nQ2xhc3NdPVwie1xuICAgICAgICAgICAgcHV6emxlOnRydWUsXG4gICAgICAgICAgICBzb2x2ZWQ6IG9wdGlvbjEudmFsdWUgPT0gb3B0aW9uMU51bWJlciAmJiBvcHRpb24yLnZhbHVlID09IG9wdGlvbjJOdW1iZXIgJiYgb3B0aW9uMy52YWx1ZSA9PSBvcHRpb24zTnVtYmVyICYmIG9wdGlvbjQudmFsdWUgPT0gb3B0aW9uNE51bWJlciAgIFxuICAgICAgICB9XCJcbiAgICAgICAgW25nU3R5bGVdPVwie2Rpc3BsYXk6bmFtZS52YWx1ZT09PScnID8gJ25vbmUnOidibG9jayd9XCI+XG4gICAgICAgIFxuICAgICAgICAgICAgPGgyPlRoZSBwdXp6bGUgfCBcbiAgICAgICAgICAgIHt7b3B0aW9uMS52YWx1ZSA9PSBvcHRpb24xTnVtYmVyICYmIG9wdGlvbjIudmFsdWUgPT0gb3B0aW9uMk51bWJlciAmJiBvcHRpb24zLnZhbHVlID09IG9wdGlvbjNOdW1iZXIgJiYgb3B0aW9uNC52YWx1ZSA9PSBvcHRpb240TnVtYmVyID8gJ1NPTFZFRCc6J05PVCBTT0xWRUQnfX08L2gyPlxuICAgICAgICAgICAgPHA+V2VsY29tZSA8c3BhbiBjbGFzcz1cIm5hbWVcIj57e25hbWUudmFsdWV9fTwvc3Bhbj48L3A+XG4gICAgICAgICAgICA8YnI+XG4gICAgICAgICAgICBPcHRpb24gMTpcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiICNvcHRpb24xIChrZXl1cCk9XCIwXCI+PGJyPlxuICAgICAgICAgICAgT3B0aW9uIDI6XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAjb3B0aW9uMiAoa2V5dXApPVwiMFwiPjxicj5cbiAgICAgICAgICAgIE9wdGlvbiAzOlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgI29wdGlvbjMgKGtleXVwKT1cIjBcIj48YnI+XG4gICAgICAgICAgICBPcHRpb24gNDpcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiICNvcHRpb240IChrZXl1cCk9XCIwXCI+PGJyPiAgICAgICAgICAgIFxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDxoMiBbaGlkZGVuXT1cIm9wdGlvbjEudmFsdWUgIT0gb3B0aW9uMU51bWJlciB8fCBvcHRpb24yLnZhbHVlICE9IG9wdGlvbjJOdW1iZXIgfHwgb3B0aW9uMy52YWx1ZSAhPSBvcHRpb24zTnVtYmVyIHx8IG9wdGlvbjQudmFsdWUgIT0gb3B0aW9uNE51bWJlclwiPkNvbmdyYXR1bGF0aW9uIHt7bmFtZS52YWx1ZX19ICwgeW91IGRpZCBpdCE8L2gyPlxuICAgIGBcbn0pXG5cbmV4cG9ydCBjbGFzcyBQdXp6bGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XG4gICAgb3B0aW9uMU51bWJlcjpudW1iZXI7XG4gICAgb3B0aW9uMk51bWJlcjpudW1iZXI7XG4gICAgb3B0aW9uM051bWJlcjpudW1iZXI7XG4gICAgb3B0aW9uNE51bWJlcjpudW1iZXI7XG5cbiAgICBuZ09uSW5pdCgpe1xuICAgICAgICB0aGlzLm9wdGlvbjFOdW1iZXI9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSk7XG4gICAgICAgIHRoaXMub3B0aW9uMk51bWJlcj0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKTtcbiAgICAgICAgdGhpcy5vcHRpb24zTnVtYmVyPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkpO1xuICAgICAgICB0aGlzLm9wdGlvbjROdW1iZXI9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSk7XG5cbiAgICAgICAgY29uc29sZS5sb2codGhpcy5vcHRpb24xTnVtYmVyKTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5vcHRpb24yTnVtYmVyKTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5vcHRpb24zTnVtYmVyKTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5vcHRpb240TnVtYmVyKTtcbiAgICB9XG5cblxuXG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
