import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'round'
})

export class RoundPipe implements PipeTransform {

  transform(value: number, isUpper: boolean, addition = 0): number {
    if (isUpper) return Math.ceil(value + addition);
    return Math.floor(value + addition);
  }

}
