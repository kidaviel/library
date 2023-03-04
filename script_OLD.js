const openFormButton = document.querySelector(".open-button");
const openFormHTML = `
<div class="form-container">
  <label for="book-name">Book Name:</label>
  <input type="text" id="book-name" name="book-name" />
  <label for="pages">Pages:</label>
  <input type="number" id="pages" name="pages" />
  <label for="author">Author:</label>
  <input type="text" id="author" name="author" />
  <label for="read">read?</label>
  <select name="read" id="read">
    <option value="yes">Yes</option>
    <option value="no">No</option>
  </select>
  <button class="addbook">Add a Book</button>
</div>;`;
let addBookButton = null;
let arrayCounter = 0;

// Add event listener to open form button to open a box to add fucking html
openFormButton.addEventListener("click", openForm);

function addOpenFormFunctionalityAgain() {
  const openFormButton = document.querySelector(".open-button");
  openFormButton.addEventListener("click", openForm);
}

// Function to open the form, target the addbook button, add event lister
function openForm() {
  document.querySelector("body").innerHTML += openFormHTML;
  addBookButton = document.querySelector(".addbook");
  // Add event listner so that on click to add book, it executes the function to add book
  addBookButton.addEventListener("click", addBookToLibrary);
  // Add variable and event listener again, because innerHTML deletes all querySelectors and event listeners
  addOpenFormFunctionalityAgain();
}

function addBookToLibrary() {
  const bookName = document.querySelector("#book-name").value;
  const pages = document.querySelector("#pages").value;
  const author = document.querySelector("#author").value;
  const read = document.querySelector("#read").value === "yes" ? true : false;
  // Execute Book Object Constructor
  const newBook = new Book(bookName, pages, author, read);
  // Push to myLibrary array, add book html.
  myLibrary.push(newBook);
  myLibrary[myLibrary.length - 1].addBook();
  // ADD FUNCTIONALITY TO REMOVE ADDBOOK HTML
  const form = document.querySelector(".form-container");
  form.remove();
  // Add variable and event listener again, because innerHTML deletes all querySelectors and event listeners
  addOpenFormFunctionalityAgain();
}

let myLibrary = [];

// Add remove functionality
function removeBook() {
  document.querySelectorAll(`.remove${arrayCounter}`).forEach((button) => {
    button.addEventListener("click", button.parentNode.remove());
  });

  // for (const book in myLibrary) {
  //   document
  //     .querySelector(`.remove${book}`)
  //     .addEventListener(
  //       "click",
  //       document.querySelector(`.remove${book}`).parentNode.remove()
  //     );
  // }
  // const remove = document.querySelector(`.remove${arrayCounter}`);
  // remove.addEventListener("click", remove.parentNode.remove());
}

// Add event listener for remove
document.querySelector(".remove").addEventListener("click", removeBook);

// Book Object Constructor
function Book(name, pages, author, read) {
  this.name = name;
  this.pages = pages;
  this.author = author;
  this.read = read;
}

Book.prototype.addBook = function () {
  document.querySelector(".book-container").innerHTML += ` 
  <div class="book">
  <p>Name: ${this.name}</p>
  <p>Pages: ${this.pages}</p>
  <p>Author: ${this.author}</p>
  ${
    this.read === true
      ? // Return ticked checkbox if true
        `<p>
  <label class="switch"
    >Read?
    <input type="checkbox" checked/>
    <span class="slider round"></span>
  </label>
</p>
<button class="remove${arrayCounter}">Remove</button>`
      : // Else: Return unticked checkbox if false
        `<p>
<label class="switch"
  >Read?
  <input type="checkbox" />
  <span class="slider round"></span>
</label>
</p>
<button class="remove${arrayCounter}">Remove</button>`
  }`;
  document
    .querySelector(`.remove${arrayCounter}`)
    .addEventListener("click", removeBook);
  arrayCounter += 1;
};
