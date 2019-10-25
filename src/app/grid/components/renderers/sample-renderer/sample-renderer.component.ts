import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-sample-renderer',
  templateUrl: './sample-renderer.component.html',
  styleUrls: ['./sample-renderer.component.scss']
})
export class SampleRendererComponent implements OnInit, ICellRendererAngularComp {

  value;

  constructor() { }

  ngOnInit() {
  }

  test() {
    console.log(this.value);
  }

  agInit(params: ICellRendererParams) {
    this.value = params.value;
  }
  refresh() {
    return false;
  }

}
