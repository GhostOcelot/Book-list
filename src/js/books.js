import { updateCategoriesCounter } from "./categoriesCounter"
import { createFilterSelect } from "./filterBooks"
export class Book {
  constructor(title, author, category, priority) {
    this.title = title
    this.author = author
    this.category = category
    this.priority = priority
  }
}

export let books = localStorage.getItem("books") ? JSON.parse(localStorage.getItem("books")) : []

export const addBook = () => {
  const title = document.querySelector(".title-input").value.trim()
  const author = document.querySelector(".author-input").value.trim()
  const category = document.querySelector(".category-select").value.trim()
  const priority = document.querySelector(".priority-select").value.trim()
  if (title && author) {
    books.push(new Book(title, author, category, priority))
    localStorage.setItem("books", JSON.stringify(books))
    document.querySelector(".add-book-form").reset()
    createBookList(books)
    updateCategoriesCounter()
    document.querySelector(".warning").style.display = "none"
  } else {
    document.querySelector(".warning").style.display = "block"
  }
}

const removeBook = (e) => {
  const bookToRemove = e.target.parentElement
  books = books.filter((item) => bookToRemove.firstElementChild.textContent !== item.title)
  localStorage.setItem("books", JSON.stringify(books))
  createBookList(books)
  updateCategoriesCounter()
}

export const updateBooksCounter = () => {
  const booksCounter = document.querySelector(".books-counter")
  booksCounter.textContent = `Ilość książek na liście: ${books.length}`
}

export const createBookList = (currentBooksList) => {
  const bookList = document.querySelector(".book-list")
  bookList.innerHTML = null
  currentBooksList.forEach((item) => {
    const singleBook = document.createElement("div")
    singleBook.classList.add("single-book")
    singleBook.innerHTML = `
      <h3 class="title">${item.title}</h3>
      <p class="author">${item.author}</p>
      <span class="small">kategoria: ${item.category} | </span>
      <span class="small">priorytet: ${item.priority}</span>
      <button class="remove-book-button">X</button>
    `
    singleBook.lastElementChild.addEventListener("click", removeBook)
    bookList.appendChild(singleBook)
  })
  updateBooksCounter()
  createFilterSelect(books)
}
