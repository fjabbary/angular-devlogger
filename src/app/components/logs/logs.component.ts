import { Component } from '@angular/core';
import { Log } from 'src/app/models/Log';
import { LogService } from '../../services/log.service';
@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css']
})
export class LogsComponent {
  logs: Log[] = [];

  constructor(private logService: LogService) { }

  ngOnInit() {
    this.logService.getLogs().subscribe(data => {
      this.logs = data
    });
  }

  selectLog(log: Log) {
    this.logService.setFormLog(log)
  }
}
