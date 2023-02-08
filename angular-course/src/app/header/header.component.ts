import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})

export class HeaderComponent {
  @Output() componentChanged = new EventEmitter<string>();

  onMenuElementClicked(menuName: string): void {
    console.log('menu clicked', menuName);

    this.componentChanged.emit(menuName);
  }

}