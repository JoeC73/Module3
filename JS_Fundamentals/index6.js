 const westley = {
    name: 'Westley',
    numFingers: 5
   }
    const rugen = {
    name: 'Count Rugen',
    numFingers: 6
     }
const inigo = {
    firstName: 'Inigo Montoya',
    greeting(person) {
        let greeting = `Hello ${person.name}, my name is ${this.firstName}. `;
        console.log(greeting + this.getCatchPhrase(person));
    },
    getCatchPhrase: (person) => {
        return person.numFingers === 6 ?  'You killed my father, prepare to die': 'Nice to meet you.'
    }
}
    

inigo.greeting(westley)
inigo.greeting(rugen)