import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCreationStatus: string = 'No server was created!';
  serverName: string = '';
  serverCreated: boolean = false;
  servers: string[] = ['testserver', 'testserver2'];
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  onCreateServer(): void {
    this.servers.push(this.serverName);
    this.serverCreated = true;
    this.serverCreationStatus = 'Server created! Name is ' + this.serverName;
  }

  onUpdateServerName(e: Event): void {
    this.serverName = (<HTMLInputElement>e.target).value;
  }

  ngOnInit(): void {}
}
