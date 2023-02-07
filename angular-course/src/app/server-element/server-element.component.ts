import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.scss']
})
export class ServerElementComponent implements OnInit, OnChanges{  
  @Input('srvElement') element: {type: string, name: string, content: string};
  @Input() name: string;

  constructor() {
    console.log('contructor called');    
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges called');    
    console.log(changes);
  }

  ngOnInit(): void {
    console.log('ngOnInit called'); 
  }

}
