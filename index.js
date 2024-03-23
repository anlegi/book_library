const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
  this.readString = ""

  if (this.read){
    this.readString = "read"
  } else {
    this.readString = "not read yet"
  }
}



function addBookToLibrary() {
    let title = prompt("Title")
    let author = prompt("Author")
    let pages = prompt("Pages")
    let read = prompt("Have you read it? (true/false)") == "true"

  const newBook = new Book(title, author, pages, read)
  myLibrary.push(newBook)
  console.log(myLibrary)
}

let button = document.querySelector(".add")
button.addEventListener("click", addBookToLibrary)
