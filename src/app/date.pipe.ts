import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'date'
})
export class DatePipe implements PipeTransform {

  transform(list: any[], start: any, end: any): any {
    if (list && list.length) {
      const resultArray = [];
      if (start === '' || end === '') {
          return list;
      } else {
        for (const item of list) {
              // if (item.date.match(dateFilter)) {
              //   resultArray.push(item);
              // }
              if (item.date >= start && item.date <= end) {
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
