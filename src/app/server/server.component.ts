import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  @Input() el;
  @Input() logs;
  @Input() i;
  @Output() ServerCreate = new EventEmitter<{name, content}>();

  serverId = 10;
  serverStatus = 'offline';
 
  constructor() {
    this.serverStatus = Math.random() < 0.5 ? 'online': 'offline';
  }

  ngOnInit() {
    console.log(this.el)
  }

  getColor() {
    // if (this.serverStatus === 'online'){
    //   return 'green'
    // } else {
    //   return 'red'
    // }
    this.serverStatus === 'online' ? 'green': 'red';
  }
  showLog(index){
      if(this.logs && this.logs.length > 0) {
        return this.logs[index]      
      } else {
        return '2016'
      }
  }

}
