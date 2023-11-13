// a) Define a custom toString method for the Person object that will format and print
// their details

function Person(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;
}

const person1 = new Person("James Brown", 73, "male");
const person2 = new Person('Billy "D" Williams', 80, "male");

Person.prototype.toString = function personToString() {
  return `${this.name} ${this.age} ${this.gender}`;
};
console.log("person1: " + person1.toString());
console.log("person2: " + person2.toString());

// b) Test your method by creating 2 different people using the below constructor function
// and printing them
// c) Create a new constructor function Student that uses call to inherit from Person and
// add an extra property cohort

function Student(name, age, cohort) {
  this.name = name;
  this.age = age;
  this.cohort = cohort;
}

Student.prototype = person1;

const newStudent = new Student("Joseph", 35, "SoftEng");
const newStudent1 = new Student("John", 41, "CyberSec");

console.log(newStudent);
console.log("newstudent: " + newStudent.toString());
console.log("newstudent1: " + newStudent1.toString());

Student.prototype.toString = function studentToString() {
  return `${this.name} ${this.age} ${this.gender}`;
};

// d) Add a custom toString for Student objects that formats and prints their details. Test
// with 2 students.
