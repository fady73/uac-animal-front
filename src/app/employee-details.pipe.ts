import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'employeeDetails'
})
export class EmployeeDetailsPipe implements PipeTransform {
    transform(list: any[], filteredText: string): any {
        if (list && list.length) {
            const resultArray = [];
            if (filteredText === undefined) {
                return list;
            }
            for (const item of list) {
                if (item.company.match('^.*' + filteredText + '.*$')) {
                    resultArray.push(item);
                }
            }
            return resultArray;
        } else {
            return list;
        }
    }
}
