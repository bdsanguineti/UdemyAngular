import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.scss']
})
export class CockpitComponent implements OnInit{
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() bluePrintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  // newServerName = '';
  // newServerContent = '';
  @ViewChild('serverContentInput', {static: true}) serverContentInput: ElementRef;

  ngOnInit(): void {    
  }

  onAddServer(nameImput: HTMLInputElement) {    
    this.serverCreated.emit({
      serverName: nameImput.value, 
      serverContent: this.serverContentInput.nativeElement.value
    });    
    
  }

  onAddBlueprint(nameImput: HTMLInputElement) {
    this.bluePrintCreated.emit({
      serverName: nameImput.value, 
      serverContent: this.serverContentInput.nativeElement.value
    });

  }
}
