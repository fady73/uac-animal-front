import { EmployeeDetailsPipe } from './employee-details.pipe';

describe('EmployeeDetailsPipe', () => {
  it('create an instance', () => {
    const pipe = new EmployeeDetailsPipe();
    expect(pipe).toBeTruthy();
  });
});
