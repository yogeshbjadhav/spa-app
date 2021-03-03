import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countFilter'
})
export class CountFilterPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]) {    
    //return value.trim().split(/\s+/).length;
    return value.length;
  }

}
