import {
  Pipe,
  PipeTransform,
  ModuleWithComponentFactories
} from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'customDate'
})
export class CustomDatePipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    return moment(value).format(args[0]);
  }
}
