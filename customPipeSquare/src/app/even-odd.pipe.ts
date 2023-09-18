import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'evenOdd'
})
export class EvenOddPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): any {
   if(value%2==0)
   {
    return "even";
   }
   else(value%2==1)
   {
    return "odd";
   }
  }

}
