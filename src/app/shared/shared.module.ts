import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumberOrDashPipe, PercentWithSuffixFormatPipe } from './pipes/number.pipe';



@NgModule({
  declarations: [
    NumberOrDashPipe,
    PercentWithSuffixFormatPipe
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
