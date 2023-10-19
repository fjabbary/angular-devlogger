import { Injectable } from '@angular/core';
import { Log } from '../models/Log';

import { BehaviorSubject } from 'rxjs';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogService {
  logs: Log[] = [
    { id: '1', text: 'Generated Component', date: new Date() },
    { id: '2', text: 'Logged added', date: new Date() },
    { id: '3', text: 'Generated bootstrap', date: new Date() }
  ];

  private logSource = new BehaviorSubject<Log>({ id: '', text: '', date: '' });
  selectedLog = this.logSource.asObservable();

  constructor() { }

  getLogs(): Observable<Log[]> {
    return of(this.logs);
  }

  setFormLog(log: Log) {
    this.logSource.next(log)

  }
}
