/** Problem -01 ( Divide the Asset ) */

var area = 800;

//write your code here

var halfArea = area / 2;

console.log(halfArea);

/** Problem -02 ( Cycle or Laptop ) */

var money = 10000;

//write your code here

if (money >= 25000) {

console.log('Laptop');

} else if (money >= 10000 && money < 25000) {

console.log('Cycle');

} else {

console.log('Chocolate ');

}

/** Problem -03 ( Medicine Planner ) */

var lastDay = 4;

//write your code here

for (let medicineDay = 1; medicineDay <= lastDay; medicineDay++) {

if (medicineDay % 3 === 0) {

console.log(medicineDay, '- medicine');

} else {

console.log(medicineDay, '- rest');

}

}

/** Problem 04 - (Delete / Store) */

var fileName = 'pdfData.jpg';

//write your code here

if (

fileName[0] === '#' ||

fileName.includes('.pdf') === true ||

fileName.includes('.docx') === true

) {

console.log('Store');

} else {

console.log('Delete');

}

/** Problem 05 - ( PH Email Generator ) */

var student = { name: 'jhankar', roll: 1014, department: 'cse' };

//write your code here

var email =

student.name.toLowerCase() +

student.roll +

'.' +

student.department.toLowerCase() +

'@ph.ac.bd';

console.log(email);

/** Problem 06 : (Current Salary ) */

var experience = 30;

var startingSalary = 45000;

//write your code here

var CurrentSalary = startingSalary;

for (let experienceYear = 1; experienceYear <= experience; experienceYear++) {

CurrentSalary = CurrentSalary + (CurrentSalary * 5) / 100;

}

console.log(CurrentSalary.toFixed(2));