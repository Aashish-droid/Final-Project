import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(diseases: any[], searchTerm: string): any[] {
    if (!diseases || !searchTerm) {
      return diseases;
    }
    return diseases.filter((disease:any) => {
      return disease.title.toLowerCase().includes(searchTerm.toLowerCase());
    });
  }

}
