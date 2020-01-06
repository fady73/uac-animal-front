import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'visits'
})
export class VisitsPipe implements PipeTransform {

  transform(list: any[], filteredText: any): any {
    if (list && list.length) {
      const resultArray = [];
      if (filteredText === undefined) {
          return list;
      }
      for (const item of list) {
          if (item.companyname.match('^.*' + filteredText + '.*$')) {
              resultArray.push(item);
          } else if (item.employee.match('^.*' + filteredText + '.*$')) {
              resultArray.push(item);
          }
      }
      return resultArray;
    } else {
        return list;
    }
  }

}
