const salaries = [
  { name: "Timothy", salary: 35000 },
  { name: "David", salary: 25000 },
  { name: "Mary", salary: 55000 },
  { name: "Christina", salary: 75000 },
  { name: "James", salary: 43000 },
];

// a) Write a function sumSalaries(salaries) that calculates and returns the total of all
// salaries;
function sumSalaries(total) {
  const totalSalaries = salaries.reduce(
    (currentTotal, currentSalaries) => currentTotal + currentSalaries.salary,
    0
  );
  return totalSalaries;
}
console.log(sumSalaries(salaries));

// b) Write a function topEarner(salaries) that calculates and returns the name of the
// person earning the highest salary
function topEarner() {
  const topSalary = salaries
    .filter((salaries) => salaries.salary > 55000)
    .map((salaries) => salaries.name);
  return topSalary;
}
console.log(topEarner(salaries));
