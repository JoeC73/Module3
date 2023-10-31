const phoneBookABC = new Map()
phoneBookABC.set('Annabelle', '0412312343') 
phoneBookABC.set('Barry', '0433221117')
phoneBookABC.set('Caroline', '0455221182')
phoneBookABC.delete('Caroline', '0455221182')
phoneBookABC.set('Caroline', '0455221153')



    

const phoneBookDEF = new Map()
phoneBookDEF.set('David', '04210573987')
phoneBookDEF.set('Edward', '0456387129')
phoneBookDEF.set('Fred', '0468735193')
for (let item of phoneBookDEF) {
console.log(item)
}


// console.log(phoneBookDEF.get('David'));
// console.log(phoneBookDEF.size);
// console.log(phoneBookDEF.has('Fred'))
// console.log(phoneBookABC.get('Caroline'))

const phoneBook = new Map([...phoneBookABC, ...phoneBookDEF]);
console.log(phoneBook)