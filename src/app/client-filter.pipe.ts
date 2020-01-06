import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'clientFilter'
})
export class ClientFilterPipe implements PipeTransform {
  transform(list: any[], filteredText: any): any {
    if (list && list.length) {
        const resultArray = [];
        if (filteredText === undefined) {
            return list;
        }
        for (const item of list) {
            if (item.name.match('^.*' + filteredText + '.*$')) {
                resultArray.push(item);
            } else if (item.phone.match('^.*' + filteredText + '.*$')) {
                resultArray.push(item);
            }
        }
        return resultArray;
    } else {
        return list;
    }
  }

}
