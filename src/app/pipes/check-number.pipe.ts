import { Pipe, PipeTransform } from '@angular/core';
import { isNumber } from 'util';

@Pipe({
  name: 'checkNumber'
})
export class CheckNumberPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (isNaN(parseInt(value))) {
      return 0;
    } else {
      return value;
    }
  }

}
