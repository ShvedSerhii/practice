import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fullDate'
})
export class FullDatePipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    return value;
  }
}
