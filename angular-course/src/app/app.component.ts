import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  countNumber: number;
  oddComponents: number[] = [];
  evenComponents: number[] = [];

  onGameStarted(number: number): void {


    console.log('this count number', this.countNumber);
    console.log('odd components ', this.oddComponents);
    console.log('even components ', this.evenComponents);
    console.log('');

    this.countNumber = number;
    
    if( number % 2 === 0){
      this.evenComponents.push(number);

    } else {
      this.oddComponents.push(number);
    }

  }
}
