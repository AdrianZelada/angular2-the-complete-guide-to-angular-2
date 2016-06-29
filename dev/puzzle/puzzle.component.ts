
import {Component} from '@angular/core';
import {OnInit} from '@angular/core';

@Component({
    selector:'my-puzzle',
    template:`
        <section class="setup">
            Enter your name Please: 
            <input type="text" #name (keyup)="0">
        </section>
        <section 
        [ngClass]="{
            puzzle:true,
            solved: option1.value == option1Number && option2.value == option2Number && option3.value == option3Number && option4.value == option4Number   
        }"
        [ngStyle]="{display:name.value==='' ? 'none':'block'}">
        
            <h2>The puzzle | 
            {{option1.value == option1Number && option2.value == option2Number && option3.value == option3Number && option4.value == option4Number ? 'SOLVED':'NOT SOLVED'}}</h2>
            <p>Welcome <span class="name">{{name.value}}</span></p>
            <br>
            Option 1:
            <input type="text" #option1 (keyup)="0"><br>
            Option 2:
            <input type="text" #option2 (keyup)="0"><br>
            Option 3:
            <input type="text" #option3 (keyup)="0"><br>
            Option 4:
            <input type="text" #option4 (keyup)="0"><br>            
        </section>
        <h2 [hidden]="option1.value != option1Number || option2.value != option2Number || option3.value != option3Number || option4.value != option4Number">Congratulation {{name.value}} , you did it!</h2>
    `
})

export class PuzzleComponent implements OnInit{
    option1Number:number;
    option2Number:number;
    option3Number:number;
    option4Number:number;

    ngOnInit(){
        this.option1Number= Math.round(Math.random());
        this.option2Number= Math.round(Math.random());
        this.option3Number= Math.round(Math.random());
        this.option4Number= Math.round(Math.random());

        console.log(this.option1Number);
        console.log(this.option2Number);
        console.log(this.option3Number);
        console.log(this.option4Number);
    }



}
