// Composite pattern lets clients to treat the individual objects in a uniform manner.

export class Developer {
  name?;
  salary?;
  roles?;
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  getName() {
    return this.name;
  }

  setSalary(salary) {
    this.salary = salary;
  }

  getSalary() {
    return this.salary;
  }

  getRoles() {
    return this.roles;
  }

  develop() {
    /* */
  }
}

export class Designer {
  name?;
  salary?;
  roles?;
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  getName() {
    return this.name;
  }

  setSalary(salary) {
    this.salary = salary;
  }

  getSalary() {
    return this.salary;
  }

  getRoles() {
    return this.roles;
  }

  design() {
    /* */
  }
}

export class Organization {
  employees?;
  constructor() {
    this.employees = [];
  }

  addEmployee(employee) {
    this.employees.push(employee);
  }

  getNetSalaries() {
    let netSalary = 0;

    this.employees.forEach((employee) => {
      netSalary += employee.getSalary();
    });

    return netSalary;
  }
}

// // Prepare the employees
// const john = new Developer('John Doe', 12000)
// const jane = new Designer('Jane', 10000)

// // Add them to organization
// const organization = new Organization()
// organization.addEmployee(john)
// organization.addEmployee(jane)

// console.log("Net salaries: " , organization.getNetSalaries()) // Net Salaries: 22000
