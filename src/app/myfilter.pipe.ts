import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myfilter'
})
export class MyfilterPipe implements PipeTransform {

  transform(myarray:any,term: string) {    
    if (term == undefined) return myarray
    return myarray.filter(function(myarray_value){//index value
      return myarray_value.name.toLowerCase().includes(term.toLowerCase())
   })    

  }

}
