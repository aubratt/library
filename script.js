const myLibrary = [];

function Book(title, author) {
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor");
    }
    
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
}

function addBookToLibrary() {
    const title = prompt("Enter book title: ");
    const author = prompt("Enter book author: ");

    const newBook = new Book(title, author);
    myLibrary.push(newBook);
}

addBookToLibrary();