import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custompipe'
})
export class CustompipePipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): any {
   
    if(value>0){
      return "number is possitive";
     }
     else(value<0)
     {
      return "number is negative"
     }
  }


}
