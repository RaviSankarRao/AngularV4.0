import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-directive',
  templateUrl: './style-directive.component.html',
  styleUrls: ['./style-directive.component.css']
})
export class StyleDirectiveComponent implements OnInit {
  serverStatus = "offline";

  constructor() { }

  ngOnInit() {
  }

  onGetStatus(){
    this.serverStatus = Math.random() > 0.5 ? "online" : "offline";
  }

  getStatusColor(){
    return this.serverStatus === "online" ? "green" : "red";
  }

}
