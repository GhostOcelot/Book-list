import { categories, renderForms } from "./addBookForm"

export const createAddCategoryForm = () => {
  const addCategoryFrom = document.createElement("form")
  addCategoryFrom.classList.add("add-category-form")
  return addCategoryFrom
}

export const createAddCategoryInput = () => {
  const addCategoryInput = document.createElement("input")
  addCategoryInput.classList.add("add-category-input", "input")
  addCategoryInput.setAttribute("type", "text")
  addCategoryInput.setAttribute("placeholder", "dodaj kategorię")
  return addCategoryInput
}

export const createAddCategoryButton = () => {
  const addCategoryButton = document.createElement("button")
  addCategoryButton.classList.add("add-category-button", "input")
  addCategoryButton.textContent = "+"
  addCategoryButton.addEventListener("click", addCategory)
  return addCategoryButton
}

const addCategory = (e) => {
  e.preventDefault()
  const newCategory = document.querySelector(".add-category-input")
  if (newCategory.value.trim()) {
    categories.push(newCategory.value.trim())
    localStorage.setItem("categories", JSON.stringify(categories))
    renderForms()
  }
  newCategory.value = ""
}
