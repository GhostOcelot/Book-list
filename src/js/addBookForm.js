import { addBook, updateBooksCounter } from "./books"
import {
  createAddCategoryForm,
  createAddCategoryInput,
  createAddCategoryButton,
} from "./addCategoryForm"

export let categories = ["kryminał", "sci-fi", "fantasy", "poezja", "dramat", "nauki ścisłe"]

const createAddBookForm = () => {
  const addBookForm = document.createElement("form")
  addBookForm.classList.add("add-book-form")
  return addBookForm
}

const createTitleInput = () => {
  const titleInput = document.createElement("input")
  titleInput.classList.add("title-input", "input")
  titleInput.setAttribute("type", "text")
  titleInput.setAttribute("placeholder", "podaj tytuł")
  return titleInput
}

const createAuthorInput = () => {
  const authorInput = document.createElement("input")
  authorInput.classList.add("author-input", "input")
  authorInput.setAttribute("type", "text")
  authorInput.setAttribute("placeholder", "podaj autora")
  return authorInput
}

const createCategorySelect = () => {
  const categorySelect = document.createElement("select")
  categorySelect.classList.add("category-select", "input")
  localStorage.getItem("categories")
    ? (categories = JSON.parse(localStorage.getItem("categories")))
    : null
  categories.forEach((item) => {
    const option = document.createElement("option")
    option.setAttribute("value", item)
    option.textContent = item
    categorySelect.appendChild(option)
  })
  return categorySelect
}

const createPrioritySelect = () => {
  const prioritySelect = document.createElement("select")
  prioritySelect.classList.add("priority-select", "input")

  for (let i = 1; i <= 5; i++) {
    const option = document.createElement("option")
    option.setAttribute("value", i)
    option.textContent = i
    prioritySelect.appendChild(option)
  }
  return prioritySelect
}

const createAddBookButton = () => {
  const addBookButton = document.createElement("input")
  addBookButton.classList.add("submit-button", "input")
  addBookButton.setAttribute("type", "submit")
  addBookButton.setAttribute("value", "dodaj książkę do listy")
  addBookButton.addEventListener("click", (e) => {
    e.preventDefault()
    addBook()
  })
  return addBookButton
}

export const renderForms = () => {
  const formContainer = document.querySelector(".form-container")
  const addBookForm = createAddBookForm()
  addBookForm.appendChild(createTitleInput())
  addBookForm.appendChild(createAuthorInput())
  addBookForm.appendChild(createCategorySelect())
  addBookForm.appendChild(createPrioritySelect())
  addBookForm.appendChild(createAddBookButton())

  const addCategoryForm = createAddCategoryForm()
  addCategoryForm.appendChild(createAddCategoryInput())
  addCategoryForm.appendChild(createAddCategoryButton())

  formContainer.innerHTML = null
  formContainer.appendChild(addBookForm)
  formContainer.appendChild(addCategoryForm)

  updateBooksCounter()
}
