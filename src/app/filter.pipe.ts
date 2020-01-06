import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter',
    pure: false
})
export class FilterPipe implements PipeTransform {
    transform(list: any[], filterText: string): any {
        if (list && list.length) {
            const resultArray = [];
            if (filterText === undefined) {
                return list;
            }
            for (const item of list) {
                if (item.name.match('^.*' + filterText + '.*$')) {
                    resultArray.push(item);
                } else if (item.phone.match('^.*' + filterText + '.*$')) {
                    resultArray.push(item);
                }
            }
            return resultArray;
        } else {
            return list;
        }
    }
}
