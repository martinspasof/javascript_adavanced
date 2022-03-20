"use strict";

let devFactory = function (name, salary) {
    let _salary = salary;

    return {
        name: name,
        setSalary: function (salary) {
            _salary = salary;
        },
        getSalary: function () {
            return _salary;
        },
        increaseSalary: function (incrValue, pass) {
            if (pass === 'abracadabra') {
                this.setSalary(_salary + incrValue);
            }

            return this.getSalary();
        }
    }
}

let dev1 = devFactory('Peter', 1000);
let dev2 = devFactory('Maria', 1200);

console.log(`${dev1.name} salary is ${dev1.getSalary()}`);
console.log(`${dev2.name} salary is ${dev2.getSalary()}`);

dev1.increaseSalary(500, 'abracadabra');
dev2.increaseSalary(100, '123');

console.log(`${dev1.name} salary after promotion is ${dev1.getSalary()}`);
console.log(`${dev2.name} salary after promotion is ${dev2.getSalary()}`);

// *** OUTPUT ***
// Peter salary is 1000
// Maria salary is 1200
// Peter salary after promotion is 1500
// Maria salary after promotion is 1200