import { Pipe, PipeTransform } from '@angular/core';
import { DecimalPipe } from '@angular/common';

export const NUMBER_FORMAT = '1.2-2';

@Pipe({
  name: 'numberOrDash'
})
export class NumberOrDashPipe extends DecimalPipe implements PipeTransform {
  transform(value: any, arg?: string): any {
      value = parseFloat(value);

      if (typeof value !== 'undefined' &&  !isNaN(value) && value !== 0) {
          return super.transform(value, '1.0-2');
      } else {
          return arg ? arg : '-';
      }
  }
}

@Pipe({
  name: 'percentWithSuffixFormat'
})
export class PercentWithSuffixFormatPipe extends DecimalPipe implements PipeTransform {
  transform(value: any, arg?: string): any {
      value = parseFloat(value);

      if (typeof value !== 'undefined' &&  !isNaN(value)) {
          const format = arg ? arg : NUMBER_FORMAT;
          return super.transform(value * 100, format) + '%';
      } else {
          return '';
      }
  }
}
