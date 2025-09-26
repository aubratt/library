// const myLibrary = [];

// function Book(title, author) {
//     if (!new.target) {
//         throw Error("You must use the 'new' operator to call the constructor");
//     }

//     this.id = crypto.randomUUID();
//     this.title = title;
//     this.author = author;
// }

// function addBookToLibrary() {
//     const title = prompt("Enter book title: ");
//     const author = prompt("Enter book author: ");

//     const newBook = new Book(title, author);
//     myLibrary.push(newBook);
// }

// function displayLibrary(library) {
//     for (let i = 0; i < library.length; i++) {
//         const container = document.getElementById("container");

//         const title = document.createElement("p");
//         title.style.color = "#E1B111";
//         title.textContent = library[i].title;

//         const author = document.createElement("p");
//         author.style.color = "#E1B111";
//         author.textContent = library[i].author;

//         container.appendChild(title);
//         container.appendChild(author);
//     }
// }

// document.addEventListener("DOMContentLoaded", function () {
//     addBookToLibrary();
//     displayLibrary(myLibrary);
// });
