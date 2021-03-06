import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{ serverName:string, serverContent:string }>() ;
  @Output('bpCreated') blueprintCreated = new EventEmitter<{ serverName:string, serverContent:string }>();

  //newServerName = '';
  //newServerContent = '';

  @ViewChild('serverContentInput') serverContentInput :ElementRef ;
  //View Child - gets access to template and DOM of a component

  constructor() { }

  ngOnInit() {
  }

  onAddServer(nameInput:HTMLInputElement) {
    //console.log(nameInput.value);
    this.serverCreated.emit({
      serverName:nameInput.value,
      //serverContent:this.newServerContent
      serverContent:this.serverContentInput.nativeElement.value
    });
  }

  onAddBlueprint(nameInput:HTMLInputElement) {
    //console.log(nameInput.value);
    this.blueprintCreated.emit({
      serverName:nameInput.value,
      //serverContent:this.newServerContent
      serverContent:this.serverContentInput.nativeElement.value
    });
  }
}
