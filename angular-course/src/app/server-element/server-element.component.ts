import { 
  AfterContentChecked, 
  AfterContentInit, 
  Component, 
  Input, 
  OnChanges, 
  OnInit, 
  SimpleChanges,
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.scss']
})
export class ServerElementComponent implements OnInit,
  OnChanges, 
  AfterContentInit, 
  AfterContentChecked,
  OnDestroy{  
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

  ngDoCheck(): void {
    console.log('ngDoCheck called');
  }

  ngAfterContentInit(): void {
    console.log('AfterContentInit called');
  };

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked called');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy called');
  }

}
