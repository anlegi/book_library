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

function addBookToLibrary(event) {
  event.preventDefault()

  let title = document.getElementById("title").value
  let author = document.getElementById("author").value
  let pages = document.getElementById("pages").value
  let read = document.getElementById("myCheck").checked

  const newBook = new Book(title, author, pages, read)
  myLibrary.push(newBook)

  displayBook()

  document.querySelector("form").reset()
  dialog.close()
  document.querySelector('.new-book').classList.remove('new-book-centered');
}

function displayBook() {
  const cardsContainer = document.querySelector(".cards")
  cardsContainer.innerHTML = ""

  for (let i = 0; i < myLibrary.length; i++) {
    const book = myLibrary[i]

     const bookCard = document.createElement("div")
        bookCard.classList.add("book-card")


        const titleElement = document.createElement("h4")
        titleElement.textContent = `Title: ${myLibrary[i].title}`
        bookCard.appendChild(titleElement)


        const authorElement = document.createElement("p")
        authorElement.textContent = `Author: ${myLibrary[i].author}`
        bookCard.appendChild(authorElement)


        const pagesElement = document.createElement("p")
        pagesElement.textContent = `Pages: ${myLibrary[i].pages}`
        bookCard.appendChild(pagesElement)


        const readLabel = document.createElement("label")
        readLabel.setAttribute("for", `read-${i}`)
        readLabel.textContent = "Read: "
        bookCard.appendChild(readLabel)


        const readCheckbox = document.createElement("input")
        readCheckbox.type = "checkbox"
        readCheckbox.checked = book.read // if book.read is true, the checkbox will be checked; otherwise it will be unchecked.
        readCheckbox.id = `read-${i}`
        readCheckbox.checked = myLibrary[i].read

        bookCard.appendChild(readCheckbox)

        readCheckbox.addEventListener('change', () => {
          myLibrary[i].read = readCheckbox.checked; // updates the read of the corresponding book in the myLibrary
        });


        const deleteBtn = document.createElement("button")
        deleteBtn.textContent = "Delete"
        deleteBtn.classList.add("delete")
        deleteBtn.setAttribute('data-index', i) // set a data attribute to identify which book to delete
        bookCard.appendChild(deleteBtn)

        cardsContainer.appendChild(bookCard)

        deleteBtn.addEventListener("click", (event) => {
          const bookIndex = event.target.getAttribute('data-index')
          myLibrary.splice(bookIndex, 1) // remove the book from the array

          displayBook()
        });
  }
};

document.querySelector('form').addEventListener('submit', addBookToLibrary)


let newBookBtn = document.querySelector(".new-book")

let dialog = document.getElementById("dialog")
let button = document.querySelector(".add")
button.addEventListener("click", addBookToLibrary)

newBookBtn.addEventListener("click", () => {
  dialog.showModal()
})
