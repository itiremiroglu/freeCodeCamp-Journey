const books = [
    {
        title: "Book One",
        authorName: "Author A",
        releaseYear: 1945
    },
    {
        title: "Book Two",
        authorName: "Author B",
        releaseYear: 1980
    },
    {
        title: "Book Three",
        authorName: "Author C",
        releaseYear: 1920
    }
];

function sortByYear(book1, book2) {
    if (book1.releaseYear < book2.releaseYear) {
        return -1;
    }
    if (book1.releaseYear > book2.releaseYear) {
        return 1;
    }
    return 0;
}
const filteredBooks = books.filter(book => book.releaseYear <= 1950);
filteredBooks.sort(sortByYear);