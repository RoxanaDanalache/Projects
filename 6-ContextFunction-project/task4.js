const bookShelf = {
    authors: ["R.J. Palacio", "Sara Pennypacker"],

    getAuthors () {
        return this.authors;
    },

    addAuthor (authorName) {
        this.authors.push (authorName);
    },
};

console.log(bookShelf.getAuthors());
bookShelf.addAuthor ("Kimberly Brubaker");
bookShelf.addAuthor ("Tom Cane");
console.log(bookShelf.getAuthors());