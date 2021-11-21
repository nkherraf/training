import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'evenValue'
})
export class EvenValuePipe implements PipeTransform {

  transform(tab: number[], ...args: unknown[]): number[] {
    return tab.filter(el => el%2==0);
  }

}
