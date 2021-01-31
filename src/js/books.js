export class Book {
  constructor(title, author, category, priority) {
    this.title = title
    this.author = author
    this.category = category
    this.priority = priority
  }
}

let books = []

export const categories = ["kryminał", "sci-fi", "fantasy", "poezja", "dramat", "nauki ścisłe"]

export const addBook = () => {
  const title = document.querySelector(".title-input").value.trim()
  const author = document.querySelector(".author-input").value.trim()
  const category = document.querySelector(".category-select").value.trim()
  const priority = document.querySelector(".priority-select").value.trim()
  books.push(new Book(title, author, category, priority))
  localStorage.setItem("books", JSON.stringify(books))
  document.querySelector(".add-book-form").reset()
  createBookList()
}

const removeBook = (e) => {
  const bookToRemove = e.target.parentElement
  books = books.filter((item) => bookToRemove.firstElementChild.textContent !== item.title)
  localStorage.setItem("books", JSON.stringify(books))
  createBookList()
}

export const updateBooksCounter = () => {
  const booksCounter = document.querySelector(".books-counter")
  booksCounter.textContent = `Books on the list: ${books.length}`
}

export const createBookList = () => {
  const bookList = document.querySelector(".book-list")
  bookList.innerHTML = null
  JSON.parse(localStorage.getItem("books"))
    ? (books = JSON.parse(localStorage.getItem("books")))
    : []
  books.forEach((item) => {
    const singleBook = document.createElement("div")
    singleBook.classList.add("single-book")
    singleBook.innerHTML = `
    <h3 class="title">${item.title}</h3>
    <p class="author">${item.author}</p>
    <p class="small">kategoria: ${item.category}</p>
    <p class="small">priorytet: ${item.priority}</p>
    <button class="remove-book-button">X</button>
    `
    singleBook.lastElementChild.addEventListener("click", removeBook)
    bookList.appendChild(singleBook)
  })
  updateBooksCounter()
}
