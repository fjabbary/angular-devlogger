import { Injectable } from '@angular/core';
import { Log } from '../models/Log';

import { BehaviorSubject } from 'rxjs';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogService {
  logs: Log[] = [
    // { id: '1', text: 'Generated Component', date: new Date() },
    // { id: '2', text: 'Logged added', date: new Date() },
    // { id: '3', text: 'Generated bootstrap', date: new Date() }
  ];

  private logSource = new BehaviorSubject<Log>({ id: '', text: '', date: '' });
  selectedLog = this.logSource.asObservable();

  constructor() { }

  getLogs(): Observable<Log[]> {
    const logsData = localStorage.getItem('logs');
    this.logs = logsData ? JSON.parse(logsData) : [];
    return of(this.logs);
  }

  setFormLog(log: Log) {
    this.logSource.next(log)
  }

  addLog(log: Log) {
    this.logs.unshift(log);
    localStorage.setItem('logs', JSON.stringify(this.logs))
  }

  updateLog(log: Log) {
    const index = this.logs.findIndex(item => log.id === item.id);
    this.logs.splice(index, 1);
    this.logs.unshift(log);
    localStorage.setItem('logs', JSON.stringify(this.logs))
  }

  deleteLog(log: Log) {
    const index = this.logs.findIndex(item => log.id === item.id);
    this.logs.splice(index, 1);
    localStorage.setItem('logs', JSON.stringify(this.logs))
  }
}
