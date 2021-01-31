import { addBook, categories, updateBooksCounter } from "./books"

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
  addBookButton.setAttribute("value", "Add book")
  addBookButton.addEventListener("click", (e) => {
    e.preventDefault()
    addBook()
  })
  return addBookButton
}

const createAddCategortyInput = () => {
  const addCategoryInput = document.createElement("input")
  addCategoryInput.classList.add("add-category-input", "input")
  addCategoryInput.setAttribute("type", "text")
  addCategoryInput.setAttribute("placeholder", "wpisz nazwę kategorii")
  return addCategoryInput
}

const createAddCategoryButton = () => {
  const addCategoryButton = document.createElement("button")
  addCategoryButton.classList.add("add-category-button", "input")
  addCategoryButton.textContent = "Add new category"
  addCategoryButton.addEventListener("click", addCategory)
  return addCategoryButton
}

const addCategory = (e) => {
  e.preventDefault()
  const newCategory = document.querySelector(".add-category-input")
  if (newCategory.value.trim()) {
    categories.push(newCategory.value.trim())
    renderForm()
  }
  newCategory.value = ""
}

export const renderForm = () => {
  const formContainer = document.querySelector(".form-container")
  const addBookForm = createAddBookForm()
  addBookForm.appendChild(createTitleInput())
  addBookForm.appendChild(createAuthorInput())
  addBookForm.appendChild(createCategorySelect())
  addBookForm.appendChild(createPrioritySelect())
  addBookForm.appendChild(createAddBookButton())
  addBookForm.appendChild(createAddCategortyInput())
  addBookForm.appendChild(createAddCategoryButton())
  formContainer.innerHTML = null
  formContainer.appendChild(addBookForm)
  formContainer.appendChild(addBookForm)
  updateBooksCounter()
}
