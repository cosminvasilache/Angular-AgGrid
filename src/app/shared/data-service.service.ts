import { Injectable } from '@angular/core';
import { rowData, colDefs } from './data-generator.mock';
import { from, asyncScheduler, Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { ColDef } from 'ag-grid-community';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor() {

  }

  getRowData(): Observable<Object[]> {
    return <Observable<Object[]>>this.makeAsync(rowData);
  }
  getColumDefs(): Observable<ColDef[]> {
    return <Observable<ColDef[]>>this.makeAsync(colDefs);
  }

  private makeAsync(value) {
    return from([value], asyncScheduler).pipe(
      delay(250)
    );
  }
}
