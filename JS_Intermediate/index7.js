const books = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
    { id: 3, title: '1984', author: 'George Orwell', year: 1949 },
    { id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932 },
    { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
];
    
// let bio = books.find(books => books.title == '1984')
// console.log(bio)

// let under50 = books.filter(books => books.year < 1950)
// console.log(under50)

// let titles = books.map(books => 'classic ' + books.title)
// console.log(titles)
// (d) Extension getTitles
function getTitles(authorInitial) {
    // console.log(authorInitial)
    return books
        .filter(book => book.author[0].toLowerCase() === authorInitial.toLowerCase())
        .map(book => book.title)
}
console.log(getTitles('f'))


// e) (Extension) Write a function latestBook() that uses find and forEach to get the book with the most recent publication date.