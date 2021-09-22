// Modal related Javascript

let modal = document.getElementById("modal");
let newBookBtn = document.getElementById("book-details");
let span = document.getElementsByClassName("close")[0];
let submit = document.getElementById("submit");
let book_name = document.getElementById("book-name");
let book_author = document.getElementById("book-author");
let book_pages = document.getElementById("book-pages");
let read_status = document.forms.readForm.read;



submit.onclick = function () {
    modal.style.display = "none";
    addBooktoLibrary(book_name.value, book_author.value, book_pages.value, read_status.value)
    clearForm();
    myLib = []
}


newBookBtn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";

}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function clearForm() {
    book_author.value = ""
    book_name.value = ""
    book_pages.value = ""
    document.getElementById("yes").checked = false;
    document.getElementById("no").checked = false;

}


// Storage-related Javascript

let myLib = []

let tableHeaders = ["Title", "Author", "Pages", "Read?"]


function Book(title, author, pages, read) {
    // Constructor
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

let table = document.querySelector('table')
let data = tableHeaders

function addBooktoLibrary(title, author, pages, read) {
    // Link this function to the submit onclick function
    const newBook = new Book(title, author, pages, read)
    myLib.push(newBook)
    console.log(myLib)
    generateTable(table, myLib)
}

function generateTableHead(table, data) {
    let thead = table.createTHead();
    let row = thead.insertRow();

    for (let key of data) {
        let th = document.createElement("th");
        let text = document.createTextNode(key);
        th.appendChild(text);
        row.appendChild(th);
    }
}

function generateTable(table, data) {
    for (let element of data) {
      let row = table.insertRow();
      for (let key in element) {
        let cell = row.insertCell();
        let text = document.createTextNode(element[key]);
        cell.appendChild(text);
      }
    }
  }

generateTableHead(table, data)









