function Person(name, age) {
    this.name = name;
    this.age = age;
    this.human = true;
    this.canDrive = age > 16;
    
}

let person1 = new Person('Joe', 35);
let person2 = new Person('James', 15)

console.log(person1)
console.log(person2)






class PersonClass {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.human = true;
        this.canDrive = age > 25;
    }

}
let person3 = new Person('Andrew', 46)
console.log(person3)
