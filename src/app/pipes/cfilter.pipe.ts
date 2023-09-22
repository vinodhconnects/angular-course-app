import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cfilter'
})
export class CfilterPipe implements PipeTransform {

  transform(courses: any, selected: string,value:string): any {
     if(selected=="both")
        return courses;
      if(selected=="c") {
         if(value=="All")
             return courses;
            return courses.filter((x:any)=>x.category==value)
      }

      if(selected=="p"){
        
         if(value=="All")
             return courses;
         if(value=="<15K")
             return courses.filter((x:any)=>x.price<15000)
         if(value=="15K-20K")
             return courses.filter((x:any)=>x.price>=15000 && x.price<20000)
         if(value==">20K")
             return courses.filter((x:any)=>x.price>20000)

      }
  }

}
