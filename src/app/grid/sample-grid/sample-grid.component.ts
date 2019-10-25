import { Component, OnInit } from '@angular/core';
import { ColDef, GridOptions } from 'ag-grid-community'
import { DataServiceService } from 'src/app/shared/data-service.service';
import { Observable } from 'rxjs';

import { basicDecorator } from '../decorators/basic';

@Component({
  selector: 'app-sample-grid',
  templateUrl: './sample-grid.component.html',
  styleUrls: ['./sample-grid.component.scss']
})
export class SampleGridComponent implements OnInit {

  rowData: Observable<Object[]>;
  columnDefs: Observable<ColDef[]>;
  gridOptions: GridOptions;

  constructor(
    private dataService: DataServiceService,
  ) {
    const gridOptions:GridOptions = {
      defaultColDef: {
        editable: true,
        resizable: true
      }
    };
    basicDecorator(gridOptions);
    this.gridOptions = gridOptions;
  }

  ngOnInit() {
    this.rowData = this.dataService.getRowData();
    this.columnDefs = this.dataService.getColumDefs();
  }

}
