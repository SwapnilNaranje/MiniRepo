import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vote'
})
export class VotePipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): any {
    if(value>=18)
    {
      return "valid for vote";
    }
    else(value<=18)
    {
      return "Invalid for vote";
    }
  }

}
