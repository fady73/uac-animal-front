import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'employeeDetails'
})
export class EmployeeDetailsPipe implements PipeTransform {
    transform(list: any[], filterText: string): any {

        let resultArray = [];
        if (filterText === undefined) {
            return list;
        }
        for (let item of list) {
            if (item.company.match('^.*' + filterText + '.*$')) {
                resultArray.push(item);
            }
        }
        return resultArray;
    }
}
