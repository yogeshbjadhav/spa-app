import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'genderfilter'
})
export class GenderfilterPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
