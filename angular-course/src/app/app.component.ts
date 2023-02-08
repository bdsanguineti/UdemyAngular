import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent { 

  componentSelected: string = 'recipe';

  onComponentChanged(component: string): void {
    console.log('oncomponentChange app component', component);

    this.componentSelected = component;
  }

}
