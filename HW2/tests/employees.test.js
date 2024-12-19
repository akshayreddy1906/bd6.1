
let {getEmployees, getEmployeeById, addEmployee} = require('../employee');
describe("Employees Functions",()=>{
  it("should get all employees",()=>{
    let employees = getEmployees();
    expect(employees.length).toBe(4);
    expect(employees).toEqual([
          { id: 1, name: 'John Doe', position: 'Software Engineer' },
          { id: 2, name: 'Jane Smith', position: 'Product Manager' },
          { id: 3, name: 'Sam Johnson', position: 'Designer' },
          { id: 4, name: 'Lisa Brown', position: 'DevOps Engineer' }
    ]);
  });
  it("should get a employee by id",()=>{
    let employee = getEmployeeById(1);
    expect(employee).toEqual( { id: 1, name: 'John Doe', position: 'Software Engineer' });
  });
    it("should return undefined for a non-existent employee",()=>{
    let employee = getEmployeeById(5);
    expect(employee).toBeUndefined();
    });
  it ("should add a new employee",()=>{
    let newEmployee = {id:5, name: "Akshay", position: "SDE"}
    let addedEmployee = addEmployee(newEmployee);
    expect(addedEmployee).toEqual({id:5, name: "Akshay", position: "SDE"});
  const employees = getEmployees();
  expect(employees.length).toBe(5)
    });
  });