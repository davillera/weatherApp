import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertToKm'
})
export class ConvertToKmPipe implements PipeTransform {

  transform(meters: number): number {
    return meters/1000;
  }

}
