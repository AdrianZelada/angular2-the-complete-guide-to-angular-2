import {Component} from '@angular/core';
import {PuzzleComponent} from "./puzzle/puzzle.component";

@Component({
    selector: 'my-app',
    template: `
       <my-puzzle></my-puzzle>
    `,
    directives:[PuzzleComponent]
})
export class AppComponent {

}