import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'catpipe'
})
export class CatpipePipe implements PipeTransform {

  transform(category: string): string {
     let original= [
      "Languages",
      "Databases",
      "Cloud",
      "Networking",
      "System Administration"
    ]

     if(category=="Languages")  return "languages.png"
     if(category=="Databases")  return "databases.png"
     if(category=="Cloud")  return "cloud.png"
     if(category=="Networking")  return "networking.png"
     if(category=="System Administration")  return "systemadmin.png"
     return "nono.png"
  }

}
