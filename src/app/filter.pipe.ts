import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter',
    pure: false
})
export class FilterPipe implements PipeTransform {
    transform(list: any[], filterText: string): any {
        let resultArray = [];
        if (filterText === undefined) {
            return list;
        }
        for (let item of list) {
            if (item.name.match('^.*' + filterText + '.*$')) {
                resultArray.push(item);
            }else if (item.phone.match('^.*' + filterText + '.*$')) {
                resultArray.push(item);
            }
        }
        return resultArray;
    }
}
