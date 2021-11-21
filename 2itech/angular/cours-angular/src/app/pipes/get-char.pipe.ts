import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getChar'
})
export class GetCharPipe implements PipeTransform {

  transform(value: string, indice: number=0): string {
    return indice<value.length?value[indice]:value;
  }

}
