const books = [
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        year: 1925,
    },

    {
        title: "To kill a mockingbird",
        author: "Harper Lee",
        year: 1960,
    },

    {
        title: "Who are you?",
        author: "George orwell",
        year: 1949,
    },

    {
        title: "pride and prejudice",
        author: "Jane Austen",
        year: 1813,
    },
];

function logTitles(titles){
    titles.sort();
    console.log(titles.join(", "));
}


function extractTitles(books,callbacks){
    const titles = books.map(book => book.title);
    callbacks(titles);
}

extractTitles(books,logTitles);