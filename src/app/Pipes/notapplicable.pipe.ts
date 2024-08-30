import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'notAtAllApplicable',
  standalone: true,
})
export class NotapplicablePipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    if (value == '' || value == null || value == undefined) {
      return 'N/A';
    } else {
      return value;
    }
  }
}
