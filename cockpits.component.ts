import { Component, EventEmitter, OnInit ,Output } from '@angular/core';

@Component({
  selector: 'app-cockpits',
  templateUrl: './cockpits.component.html',
  styleUrls: ['./cockpits.component.css'],
})
export class CockpitComponent implements OnInit {

  newServerName = '';
  newServerContent = '';

  @Output() serevrCreated = new EventEmitter<{serverName: string, serverContent: string
  }>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string
  }>();

  constructor() {}

  ngOnInit() {}

  onAddServer() {
    this.serevrCreated.emit({serverName: this.newServerName, serverContent: this.newServerContent});
  }

  onAddBlueprint() {
    this.blueprintCreated.emit({serverName: this.newServerName, serverContent: this.newServerContent });
  }
}
