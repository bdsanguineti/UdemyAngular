import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.scss']
})
export class GameControlComponent {
  @Output() gameStarted = new EventEmitter<number>();
  count: number = 0;
  interval;

  startGame(): void{
    console.log('start game', this.count);
    this.interval = setInterval(() => {
      this.gameStarted.emit(this.count);
      // console.log('emitted', this.count);
      this.count++;
    }, 1000);


  }

  stopGame(): void{
    clearInterval(this.interval);
    }

}
