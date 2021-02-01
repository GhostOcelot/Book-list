import { createBookList } from "./books"
import { books } from "./books"

export const createFilterSelect = (books) => {
  const select = document.createElement("select")
  select.classList.add("filter-by-category")
  const categories = []
  select.innerHTML += `<option>Filtruj przez kategorię</option>`
  select.innerHTML += `<option class="category-filter-option">wszystkie</option>`
  books.forEach((item) => {
    if (!categories.includes(item.category)) {
      categories.push(item.category)
      select.innerHTML += `<option class="category-filter-option">${item.category}</option>`
    }
  })
  select.addEventListener("change", () => filterByCategory(select.value))

  document.querySelector(".filters-container").innerHTML = ""
  document.querySelector(".filters-container").appendChild(select)
}

const filterByCategory = (category) => {
  if (category === "wszystkie" || category === "Filtruj przez kategorię") {
    createBookList(books)
  } else {
    const filteredBooks = books.filter((item) => item.category === category)
    createBookList(filteredBooks)
  }
  document.querySelectorAll(".category-filter-option").forEach((item) => {
    if (item.textContent === category) {
      item.selected = "selected"
    }
  })
}
