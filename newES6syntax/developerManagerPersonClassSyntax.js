/* --------------------------- Person class --------------------------- */
class Person {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }

    get age() {
        return this._age;
    }

    get name() {
        return this._name;
    }

    set name(name) {
        this._name = name;
    }
    // Person greet method
    greet() {
        console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
    }
}

/* --------------------------- Manager class -------------------------- */
class Manager extends Person {
    constructor(name, age, managed) {
        super(name, age);
        this.managed = managed;
    }

    getPersons() {
        let persons = [];
        for (let personName of this.managed.values()) {
            persons.push(personName.name);
        }

        return persons;
    }

    greet() {
        let persons = this.getPersons();
        super.greet();
        console.log(`I manage ${persons.join(', ')}.`, "\n");
    }
}

/* -------------------------- Developer class ------------------------- */
class Developer extends Person {
    constructor(name, age, skillset) {
        super(name, age);
        this.skillset = skillset;
    }

    greet() {
        super.greet();
        console.log(`I know ${this.skillset.join(', ')}.`, "\n");
    }
}

/* ----------------------------- Create Objects ----------------------------- */
// Developer instances
let maria = new Developer('Maria Popova', 23, ['Python', 'Machine Learning']);
let pesho = new Developer('Petar Petrov', 19, ['JavaScript', 'Angular', 'React', 'Vue']);

// Manager instances
let gates = new Manager('Bill Gates', 43, [maria, pesho]);

/* ----------------------------- Use the objects ---------------------------- */
maria.greet();
pesho.greet();
gates.greet();