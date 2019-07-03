import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'clientDetails'
})
export class ClientDetailsPipe implements PipeTransform {
    transform(list: any[], filteredText: any): any {
        let resultArray = [];
        if (filteredText === undefined) {
            return list;
        }
        for (let item of list) {
            if (item.employee.match('^.*' + filteredText + '.*$')) {
                resultArray.push(item);
            }
        }
        return resultArray;
    }
}
