import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringValue'
})
export class StringValuePipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): any {
   
    return value;
  }

}
