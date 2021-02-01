import { categories } from "./addBookForm"
const counterContainer = document.querySelector(".counters-container")

export const updateCategoriesCounter = () => {
  const books = localStorage.getItem("books") ? JSON.parse(localStorage.getItem("books")) : []
  counterContainer.innerHTML = ""
  categories.forEach((item) => {
    let counter = 0
    books.forEach((book) => {
      if (book.category === item) {
        counter++
      }
    })
    counterContainer.innerHTML += `<span><span class="category-label">${item}:</span> ${counter} | </span>`
  })
}
