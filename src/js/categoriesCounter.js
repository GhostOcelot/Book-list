const counterContainer = document.querySelector(".counters-container")

export const updateCategoriesCounter = () => {
  const books = JSON.parse(localStorage.getItem("books"))
  const categories = JSON.parse(localStorage.getItem("categories"))
  counterContainer.innerHTML = ""
  categories.forEach((item) => {
    let counter = 0
    books.forEach((book) => {
      if (book.category === item) {
        counter++
      }
    })
    counterContainer.innerHTML += `<span>${item}: ${counter} | </span>`
  })
}
