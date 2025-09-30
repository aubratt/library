function addBookToShelf() {
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
        titleInput.placeholder = "Title";
        titleDiv.appendChild(titleLabel);
        titleDiv.appendChild(titleInput);

        const authorDiv = document.createElement("div");
        authorDiv.className = "input-div";
        const authorLabel = document.createElement("label");
        authorLabel.textContent = "Author";
        const authorInput = document.createElement("input");
        authorInput.placeholder = "Author";
        authorDiv.appendChild(authorLabel);
        authorDiv.appendChild(authorInput);

        const pagesDiv = document.createElement("div");
        pagesDiv.className = "input-div";
        const pagesLabel = document.createElement("label");
        pagesLabel.textContent = "Pages";
        const pagesInput = document.createElement("input");
        pagesInput.placeholder = "Pages";
        pagesDiv.appendChild(pagesLabel);
        pagesDiv.appendChild(pagesInput);

        const statusDiv = document.createElement("div");
        statusDiv.className = "input-div";
        const statusLabel = document.createElement("label");
        statusLabel.textContent = "Status";
        const statusInput = document.createElement("input");
        statusInput.placeholder = "Status";
        statusDiv.appendChild(statusLabel);
        statusDiv.appendChild(statusInput);

        const confirmBtn = document.createElement("div");
        confirmBtn.className = "confirm-btn";
        confirmBtn.textContent = "Confirm";

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

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("add-book").addEventListener("click", addBookToShelf);
});
