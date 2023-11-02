const salaries = [
    { name: "Timothy", salary: 35000, },
   { name: "David", salary: 25000, },
   { name: "Mary", salary: 55000, },
  { name: "Christina", salary: 75000, },
   { name: "James", salary: 43000 }
]
    
const totalSalary = salaries.reduce((currentTotal, currentSalaries) => currentTotal + currentSalaries.salary, 0)
console.log(totalSalary)
const highSalary = salaries.filter(salaries => salaries.salary > 55000).map(salaries => salaries.name)
console.log(highSalary)