import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'middleDate'
})
export class MiddleDatePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
