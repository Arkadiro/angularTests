import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from '../app.component'
@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  @Input() element;
  @Output() serverCreated = new EventEmitter<{name, content}>();
  name = 'Linux';
  content = 'Some content';
  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverCreated1 = false;
  log = [2016,2017];

  constructor() { }

  ngOnInit() {
    setTimeout(()=>{
      this.allowNewServer = true;
    },2000)
  }

  getName(name){
    this.name = name
    return this.name;
  }

  // onCreateServer(e){
  //   this.serverCreationStatus = 'Server was created'
  //   console.log(e.target.parentElement.children[2].value)
  // }

  onCreateServer(){
      this.serverCreated.emit({
        name: this.name,
        content: this.content
      })
      this.serverCreationStatus = 'Server was created';
      this.serverCreated1 = true;
      console.log(AppComponent)
      this.log.push(new Date().getFullYear())
      //AppComponent.title = this.name
      console.log(this.log)
    }

  onUpdateServerName(name){
    //console.log(name)
    this.name = (<HTMLInputElement>name.target).value;
  }




  

}
