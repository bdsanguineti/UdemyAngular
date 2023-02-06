import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation : ViewEncapsulation.None
})
export class AppComponent {
  serverElements = [{type: 'server', name: 'TestServer', content: 'just a test 11'}];  
 
  onServerAdded(serverData: {serverName: string, serverContent: string}){
    console.log("onServerAdded method");
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    })
  }

  onBluePrintAdded(bluePrintData: {serverName: string, serverContent: string}){
    this.serverElements.push({
      type: 'blueprint',
      name: bluePrintData.serverName,
      content: bluePrintData.serverContent
    })
  }
}
