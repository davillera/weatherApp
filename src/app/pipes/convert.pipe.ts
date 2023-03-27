import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertToKmh'
})
export class ConvertPipe implements PipeTransform {

  transform(speed: number): number {
    return speed*3.5997120230382
  }

}
