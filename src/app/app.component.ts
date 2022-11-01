import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'This is junaid';
  ServerId:number=10;
  ServerName:string="Server1";
  Status:string="Offline";
  Allownewserver=false;
  serverCreationStatus="No Server was created";
  NewserverName="Test Server";
  servercreated=false;

  constructor(){
    setTimeout(() => {
      this.Allownewserver=true
    }, 4000);
  }
  OncreateServer(){
    this.servercreated=true;
    this.serverCreationStatus='The New server was created!!'+ ' ' + this.NewserverName
  }
  OnUpdateServerName(event:Event){
    this.NewserverName=(<HTMLInputElement>event.target).value;
  }

  getservicestatus(){
    return this.Status;
  }
  
}
