import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles:[`
        .online {
            color: white;
        }
    `]


})

export class ServerComponent implements OnInit {
    serverId: number = 10;
    serverStatus: string = 'offline';
    allowNewServer = false;
    serverCreationStatus = 'No server was created!';
    serverName = 'Testserver';
    serverCreated = false;
    servers = ['Testserver'];
    constructor() {
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
        setTimeout(() => {
            this.allowNewServer = true;
        }, 2000);
    }
    ngOnInit() {
    }

    onCreateServer() {
        this.serverCreated = true;
        this.servers.push(this.serverName);
        this.serverCreationStatus = 'Server was created ' + this.serverName;
    }

    getColor() {
        return this.serverStatus === 'online' ? 'green' : 'red';
    }
    // onUpdateServerName(event: Event) {
    //     this.serverName = (<HTMLInputElement>event.target).value;
    // }
}