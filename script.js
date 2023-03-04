const bookContainer = document.querySelector(".book-container");
const openFormButton = document.querySelector(".open-button");
let bookCounter = 0;

function openForm() {
  const formDiv = document.createElement("div");
  formDiv.className = "form-container";
  //   Create input fields for book name
  const labelInputName = document.createElement("label");
  labelInputName.textContent = "Book Name";
  const inputName = document.createElement("input");
  inputName.setAttribute("type", "text");
  inputName.setAttribute("value", "Book Name");
  inputName.setAttribute("id", "name");
  // Create input field for pages
  const labelInputPages = document.createElement("label");
  labelInputPages.textContent = "Pages";
  const inputPages = document.createElement("input");
  inputPages.setAttribute("type", "number");
  inputPages.setAttribute("value", "100");
  inputPages.setAttribute("id", "pages");
  // Create input for Author
  const labelInputAuthor = document.createElement("author");
  labelInputAuthor.textContent = "Author";
  const inputAuthor = document.createElement("input");
  inputAuthor.setAttribute("type", "text");
  inputAuthor.setAttribute("value", "author");
  inputAuthor.setAttribute("id", "author");
  // Create input for read
  const labelInputRead = document.createElement("label");
  labelInputRead.textContent = "Read";
  const inputRead = document.createElement("select");
  inputRead.setAttribute("id", "read");
  const readBookElement = document.createElement("option");
  readBookElement.setAttribute("value", "read");
  readBookElement.textContent = "Read";
  const unreadBookElement = document.createElement("option");
  unreadBookElement.setAttribute("value", "unread");
  unreadBookElement.textContent = "Unread";
  //   Create Submit Button
  const submitButton = document.createElement("button");
  submitButton.setAttribute("class", "submit");
  //   submitButton.setAttribute("onclick", `removeBook${i}`);
  submitButton.textContent = "Submit";

  //Append
  formDiv.appendChild(labelInputName);
  formDiv.appendChild(inputName);

  formDiv.appendChild(labelInputPages);
  formDiv.appendChild(inputPages);

  formDiv.appendChild(labelInputAuthor);
  formDiv.appendChild(inputAuthor);

  inputRead.appendChild(readBookElement);
  formDiv.appendChild(labelInputRead);
  formDiv.appendChild(inputRead);
  inputRead.appendChild(unreadBookElement);

  formDiv.appendChild(submitButton);
  document.body.appendChild(formDiv);

  //   Remove event listner for click until the submit butotn is pressed
  openFormButton.removeEventListener("click", openForm);
  //   add event listener for submit
  submitButton.addEventListener("click", addBookToLibrary);
}

openFormButton.addEventListener("click", openForm);

let myLibrary = [
  { name: "a", pages: 123, author: "a", read: true },
  { name: "b", pages: 123, author: "b", read: true },
];

function Book(name, pages, author, read) {
  this.name = name;
  this.pages = pages;
  this.author = author;
  this.read = read;
}

function removeBookFunctionality() {
  // Add funtion to remove book
  for (let i = 0; i < myLibrary.length; i++) {
    const a = document.querySelector(`.remove${i}`);
    a.Obj = myLibrary[i];
    a.addEventListener("click", function () {
      myLibrary.splice(myLibrary[i], 1);
    });
  }
}
function removeBook(index) {
  myLibrary.splice(index, 1);
}

function addBookToLibrary() {
  const bookName = document.querySelector("#name").value;
  const pages = document.querySelector("#pages").value;
  const author = document.querySelector("#author").value;
  const read = document.querySelector("#read").value === "read" ? true : false;
  //   Execute Book Object Constructor
  const newBook = new Book(bookName, pages, author, read);
  myLibrary.push(newBook);
  displayBook();
  const form = document.querySelector(".form-container");
  form.remove();
  openFormButton.addEventListener("click", openForm);
}

function displayBook() {
  bookContainer.innerHTML = "";
  myLibrary.forEach((book) => {
    // Create new book div, add class name of book
    const newBookDiv = document.createElement("div");
    newBookDiv.className = `book${bookCounter}`;
    const nameParagraph = document.createElement("p");
    const pageParagraph = document.createElement("p");
    const authorParagraph = document.createElement("p");
    const readParagraph = document.createElement("p");
    const removeButton = document.createElement("button");
    removeButton.className = `remove${bookCounter}`;
    // add CSS
    newBookDiv.style.display = "flex";
    newBookDiv.style.flexDirection = "column";
    newBookDiv.style.border = "1px black";
    newBookDiv.style.borderStyle = "solid";
    newBookDiv.style.borderRadius = "1rem";
    newBookDiv.style.padding = "1rem";
    newBookDiv.style.justifyContent = "center";
    newBookDiv.style.alignItems = "center";

    bookCounter += 1;

    // Create text nodes for each p or button
    const nameText = document.createTextNode(`Name: ${book.name}`);
    const pageText = document.createTextNode(`Pages: ${book.pages}`);
    const authorText = document.createTextNode(`Pages: ${book.author}`);
    const readText = document.createTextNode(
      `Read: ${book.read === true ? "Yes" : "No"}`
    );
    const removeButtonText = document.createTextNode("Remove");

    // Append text to their dynamically created p elements
    nameParagraph.appendChild(nameText);
    pageParagraph.appendChild(pageText);
    authorParagraph.appendChild(authorText);
    readParagraph.appendChild(readText);
    removeButton.appendChild(removeButtonText);

    // Append paragraphs to their dynamically created div elements
    newBookDiv.appendChild(nameParagraph);
    newBookDiv.appendChild(pageParagraph);
    newBookDiv.appendChild(authorParagraph);
    newBookDiv.appendChild(readParagraph);
    newBookDiv.appendChild(removeButton);
    bookContainer.appendChild(newBookDiv);
  });
}

// displayBook();
// console.log(bookContainer);
// openform();
// removeBook();
// removeBookFunctionality();
