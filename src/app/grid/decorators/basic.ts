import { GridOptions, GridReadyEvent } from "ag-grid-community";
import { SampleRendererComponent } from '../components/renderers/sample-renderer/sample-renderer.component';
import { PercentWithSuffixFormatPipe } from '../../shared/pipes/number.pipe'
import { LOCALE_ID, Inject } from '@angular/core';

function decorateGridOptions(gridOptions: GridOptions, newOptions) {
  Object.assign(gridOptions, newOptions);
}

const pipeInstance = new PercentWithSuffixFormatPipe('en');

export function basicDecorator(gridOptions: GridOptions) {
  decorateGridOptions(gridOptions, <GridOptions>{
    frameworkComponents: {
      myCustomRenderer: SampleRendererComponent
    },
    columnTypes: {
      myCustomStringType: {
        cellRenderer: 'myCustomRenderer'
      },
      myCustomNumberType: {
        cellStyle: {
          'text-align': 'right'
        },
        valueFormatter: (params) => {
          return pipeInstance.transform(params.value);
        }
      }
    },
    onGridReady: (e: GridReadyEvent) => {
      console.log('GridOptions: ', gridOptions);
    }
  });
}
