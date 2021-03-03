import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusfilter'
})
export class StatusfilterPipe implements PipeTransform {

  transform(uname: string, gender:string, status:string){
   if (gender == 'male'){
    return 'Mr. ' + uname
   }else if (gender == 'female' && status== 'married') {
     return 'Mrs. ' + uname
   }else{
    return 'Ms. ' + uname
   }
  }

}
