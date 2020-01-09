import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "littleDate"
})
export class LittleDatePipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    return (
      value.getDate() +
      "." +
      (value.getMonth() + 1) +
      "." +
      value
        .getFullYear()
        .toString()
        .substr(2, 2)
    );
  }
}
