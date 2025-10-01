function showAndHideNewBookForm() {
    const formVisible = document.getElementById("new-book-form");
    const addBook = document.getElementById("add-book");

    if (!formVisible) {
        const newBookForm = document.createElement("div");
        newBookForm.id = "new-book-form";

        const formTitle = document.createElement("div");
        formTitle.id = "form-title";
        formTitle.textContent = "Add new book";

        const titleDiv = document.createElement("div");
        titleDiv.className = "input-div";
        const titleLabel = document.createElement("label");
        titleLabel.textContent = "Title";
        const titleInput = document.createElement("input");
        titleInput.id = "title-value";
        titleInput.placeholder = "Title";
        titleDiv.appendChild(titleLabel);
        titleDiv.appendChild(titleInput);

        const authorDiv = document.createElement("div");
        authorDiv.className = "input-div";
        const authorLabel = document.createElement("label");
        authorLabel.textContent = "Author";
        const authorInput = document.createElement("input");
        authorInput.id = "author-value";
        authorInput.placeholder = "Author";
        authorDiv.appendChild(authorLabel);
        authorDiv.appendChild(authorInput);

        const pagesDiv = document.createElement("div");
        pagesDiv.className = "input-div";
        const pagesLabel = document.createElement("label");
        pagesLabel.textContent = "Pages";
        const pagesInput = document.createElement("input");
        pagesInput.id = "pages-value";
        pagesInput.placeholder = "Pages";
        pagesDiv.appendChild(pagesLabel);
        pagesDiv.appendChild(pagesInput);

        const statusDiv = document.createElement("div");
        statusDiv.className = "input-div";
        const statusLabel = document.createElement("label");
        statusLabel.textContent = "Status";
        const statusInput = document.createElement("input");
        statusInput.id = "status-value";
        statusInput.placeholder = "Status";
        statusDiv.appendChild(statusLabel);
        statusDiv.appendChild(statusInput);

        const confirmBtn = document.createElement("div");
        confirmBtn.id = "confirm-btn";
        confirmBtn.textContent = "Confirm";
        confirmBtn.addEventListener("click", addBookToLibrary);

        newBookForm.appendChild(formTitle);
        newBookForm.appendChild(titleDiv);
        newBookForm.appendChild(authorDiv);
        newBookForm.appendChild(pagesDiv);
        newBookForm.appendChild(statusDiv);
        newBookForm.appendChild(confirmBtn);

        const header = document.getElementById("header");
        const greeting = document.getElementById("greeting");

        header.parentNode.insertBefore(newBookForm, greeting);

        addBook.style.rotate = "45deg";
    } else {
        formVisible.remove();
        addBook.style.rotate = "0deg";
    }
}

const myLibrary = [];

function Book(title, author, pages, status) {
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor");
    }

    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
}

function addBookToLibrary() {
    // Confirm button was just clicked...

    // Clear form error message if there is one
    const newBookForm = document.getElementById("new-book-form");
    const messageVisible = document.getElementById("message-div");
    const confirmBtn = document.getElementById("confirm-btn");

    if (messageVisible) {
        newBookForm.appendChild(confirmBtn);
        newBookForm.removeChild(messageVisible);
    }

    // If any input fields are empty, display message to the left of the confirm button: "Please fill out all fields"
    const titleValue = document.getElementById("title-value").value;
    const authorValue = document.getElementById("author-value").value;
    const pagesValue = document.getElementById("pages-value").value;
    const statusValue = document.getElementById("status-value").value;

    const messageDiv = document.createElement("div");
    messageDiv.id = "message-div";
    const messageText = document.createElement("div");
    messageText.id = "message-text";

    if (titleValue === "" || authorValue === "" || pagesValue === "" || statusValue === "") {
        messageText.textContent = "Please fill out all fields";

        messageDiv.appendChild(messageText);
        messageDiv.appendChild(confirmBtn);

        newBookForm.appendChild(messageDiv);

        return;
    }

    // Create new Book object passing in title, author, pages, and status from respective input field text content
    const newBook = new Book(titleValue, authorValue, pagesValue, statusValue);

    // If #no-books-text is visible, remove it
    const bookshelf = document.getElementById("bookshelf");
    const noBooksTextVisible = document.getElementById("no-books-text");

    if (noBooksTextVisible) {
        bookshelf.removeChild(noBooksTextVisible);
    }

    // Create new .book div (see comment in #bookshelf for structure) with title, author, pages, and status as text content for their respective elements
    const newBookDiv = document.createElement("div");
    newBookDiv.className = "book";

    const newBookInfoDiv = document.createElement("div");
    newBookInfoDiv.className = "book-info";

    const newBookTitle = document.createElement("div");
    newBookTitle.className = "title";
    newBookTitle.textContent = newBook.title;

    const newBookAuthor = document.createElement("div");
    newBookAuthor.className = "author";
    newBookAuthor.textContent = newBook.author;

    const newBookPages = document.createElement("div");
    newBookPages.className = "pages";
    newBookPages.textContent = `${newBook.pages} pages`;

    newBookInfoDiv.appendChild(newBookTitle);
    newBookInfoDiv.appendChild(newBookAuthor);
    newBookInfoDiv.appendChild(newBookPages);

    const newBookOptionsDiv = document.createElement("div");
    newBookOptionsDiv.className = "book-options";

    const newBookStatusDiv = document.createElement("div");
    newBookStatusDiv.className = "status";

    const newBookEditBtn = document.createElement("img");
    newBookEditBtn.className = "edit";
    newBookEditBtn.src = "icons/edit.png";
    newBookEditBtn.alt = "Edit button";

    const newBookStatusText = document.createElement("div");
    newBookStatusText.className = "status-text";
    newBookStatusText.textContent = newBook.status;

    newBookStatusDiv.appendChild(newBookEditBtn);
    newBookStatusDiv.appendChild(newBookStatusText);

    const newBookDeleteDiv = document.createElement("div");
    newBookDeleteDiv.className = "delete";

    const newBookDeleteBtn = document.createElement("img");
    newBookDeleteBtn.src = "icons/delete.png";
    newBookDeleteBtn.alt = "Delete button";

    newBookDeleteDiv.appendChild(newBookDeleteBtn);

    newBookOptionsDiv.appendChild(newBookStatusDiv);
    newBookOptionsDiv.appendChild(newBookDeleteDiv);

    newBookDiv.appendChild(newBookInfoDiv);
    newBookDiv.appendChild(newBookOptionsDiv);

    // Append new .book div to #bookshelf
    bookshelf.appendChild(newBookDiv);

    // Display message to the left of confirm button: "Added to library"
    messageText.textContent = "Added to library";

    messageDiv.appendChild(messageText);
    messageDiv.appendChild(confirmBtn);

    newBookForm.appendChild(messageDiv);

    // Clear form inputs
    document.getElementById("title-value").value = "";
    document.getElementById("author-value").value = "";
    document.getElementById("pages-value").value = "";
    document.getElementById("status-value").value = "";
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("add-book").addEventListener("click", showAndHideNewBookForm);
});
