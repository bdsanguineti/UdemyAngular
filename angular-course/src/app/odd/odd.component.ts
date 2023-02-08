import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.scss']
})
export class OddComponent {
  @Input() number: number;

  ngOnChanges(){
    console.log('ngOnChanges', this.number);
  }

}
