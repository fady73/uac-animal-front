import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'clientFilter'
})
export class ClientFilterPipe implements PipeTransform {

  transform(list: any[], filteredText: any): any {
      let resultArray = [];
      if (filteredText === undefined) {
          return list;
      }
      for (let item of list) {
          if (item.name.match('^.*' + filteredText + '.*$')) {
              resultArray.push(item);
          } else if (item.phone.match('^.*' + filteredText + '.*$')) {
              resultArray.push(item);
          }
      }
      return resultArray;
  }

}
