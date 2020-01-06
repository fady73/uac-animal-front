import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'singleDate'
})
export class SingleDatePipe implements PipeTransform {

  transform(list: any[], dateFilter: any): any {
    if (list && list.length) {
      const resultArray = [];
      if (dateFilter === '') {
          return list;
      } else {
        for (const item of list) {
            if (item.date.match(dateFilter)) {
              resultArray.push(item);
            }
          }
        return resultArray;
      }
    } else {
        return list;
    }
  }

}
