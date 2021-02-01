import { renderForms } from "./addBookForm"
import { createBookList } from "./books"
import { updateCategoriesCounter } from "./categoriesCounter"
import { createFilterSelect } from "./filterBooks"
import { books } from "./books"

renderForms()
createBookList(books)
updateCategoriesCounter()

createFilterSelect(books)
