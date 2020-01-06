import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'clientDetails'
})
export class ClientDetailsPipe implements PipeTransform {
    transform(list: any[], filteredText: any): any {
        if (list && list.length) {
            const resultArray = [];
            if (filteredText === undefined) {
                return list;
            }
            for (const item of list) {
                if (item.employee.match('^.*' + filteredText + '.*$')) {
                    resultArray.push(item);
                }
            }
            return resultArray;
        } else {
            return list;
        }
    }
}
