import { Component } from '@angular/core';
import { LogService } from 'src/app/services/log.service';
import { Log } from 'src/app/models/Log';

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css']
})
export class LogFormComponent {
  id: string = '';
  text: string = '';
  date: string = '';

  constructor(private logService: LogService) { }

  ngOnInit() {
    this.logService.selectedLog.subscribe(log => {
      if (log.id !== '') {
        this.id = log.id;
        this.text = log.text;
      }
    })
  }

  clearLog() {
    this.text = '';
  }
}
