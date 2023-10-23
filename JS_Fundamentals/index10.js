function Person(name, age) {
    this.name = name;
    this.age = age;
    this.human = true;
if (this.age >= 16) {
    return 'can drive';
}
return 'cannot drive';
}
let person1 = new Person('Joe', 35);
let person2 = new Person('James', 27)


console.log(person1)
console.log(person2)







class PersonClass {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.human = true;
    }

}
let person3 = new Person('Andrew', 46)
console.log(person3)
