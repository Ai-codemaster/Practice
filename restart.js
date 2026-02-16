const employee = {
    name: 'Md Ashraful Islam', 
    designation: 'QA',
    salary: 20000,
    experiance: 2,
    age: 22
}

for (const key in employee) {
    const value = employee[key];
    console.log(key, value)
}

class Player {
    constructor (name, age) {
        this.name = name;
        this.age = age;
        this.location = 'Bangladesh'
    }
}

const Player1 = new Player('Ashraful', 22)
console.log(Player1)

const nums = [1,2,3,4,5];
let output = nums.filter(n => n%2);
console.log(output);