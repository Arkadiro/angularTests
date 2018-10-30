import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-start-app';
  server = [
    {name: 'linux', content: 'server'},
    {name: 'windows', content: 'server'}
  ];

  serverAdd(serverData){
    this.server.push({
      name: serverData.name,
      content: serverData.content
    })
  }
}
