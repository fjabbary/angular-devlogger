import { Component } from '@angular/core';
import { LogService } from 'src/app/services/log.service';
import { Log } from 'src/app/models/Log';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css']
})
export class LogFormComponent {
  id: string = '';
  text: string = '';
  date: string = '';
  isNew: boolean = true;

  constructor(private logService: LogService) { }

  ngOnInit() {
    this.logService.selectedLog.subscribe(log => {
      if (log.id !== '') {
        this.id = log.id;
        this.text = log.text;
        this.isNew = false;
      }
    })
  }

  clearLog() {
    this.text = '';
  }

  onSubmit() {
    if (this.isNew) {
      const newLog: Log = {
        id: uuidv4(),
        text: this.text,
        date: new Date()
      }
      this.logService.addLog(newLog)
      this.text = '';

    } else {
      const updatedLog: Log = {
        id: this.id,
        text: this.text,
        date: new Date()
      }
      this.logService.updateLog(updatedLog)
      this.text = '';
    }
  }
}
