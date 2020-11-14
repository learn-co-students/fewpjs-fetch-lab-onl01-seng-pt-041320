//  fetch request to the Game of Thrones API
function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books')
  // The returned response should be converted to JSON
  .then(resp => resp.json())
  // Then, call the second function, renderBooks(), passing in the API's returned JSON data as the argument. 
  .then(json => renderBooks(json));
}

function renderBooks(books) {
  const main = document.querySelector('main')
  books.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = book.name
    main.appendChild(h2)
  })
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
})
