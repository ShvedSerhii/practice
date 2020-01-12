import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'middleDate'
})
export class MiddleDatePipe implements PipeTransform {
  transform(value: any): string {
    return `${value.getDate()}.${value.getMonth() + 1}.${value.getFullYear()}`;
  }
}
