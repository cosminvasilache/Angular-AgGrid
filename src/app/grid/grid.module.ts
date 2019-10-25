import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SampleGridComponent } from './sample-grid/sample-grid.component';
import { AgGridModule } from 'ag-grid-angular';
import { SharedModule } from '../shared/shared.module';
import { SampleRendererComponent } from './components/renderers/sample-renderer/sample-renderer.component';

@NgModule({
  declarations: [
    SampleGridComponent,
    SampleRendererComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AgGridModule.withComponents([
      SampleRendererComponent
    ])
  ],
  entryComponents: [
    SampleGridComponent
  ],
  exports: [
    SampleGridComponent
  ]
})
export class GridModule { }
