
import {Component} from '@angular/core';


@Component({
    selector:'my-component',
    template:`
        <h1>by:  Adrian Pedro Zelada Torrez </h1> 
        <p [class.is-rule]="inputElement.value==='adrian'">{{name}}</p>
        <br>    
        <br>
        <input type="text" #inputElement (keyup)="keyPress(inputElement)">
        <br>
        <br>
        <button [disabled]="inputElement.value!=='adrian'"> Press </button>        
    `,
    styleUrls:['src/css/mycomponent.css']
})

export class MyComponentComponent{
    name="Adrian";
    keyPress=function(input){
        console.log(input)

    }
}
