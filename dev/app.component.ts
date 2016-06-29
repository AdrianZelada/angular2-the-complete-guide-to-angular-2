import {Component} from '@angular/core';
import {MyComponentComponent} from "./my-component.component";

@Component({
    selector: 'my-app',
    template: `
        <h1>Angular 2 Adrian</h1>
        <p>Hello World!!</p>
        <my-component></my-component>
    `,
    directives:[MyComponentComponent]
})
export class AppComponent {

}