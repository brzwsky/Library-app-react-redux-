import {useSelector, useDispatch} from 'react-redux'
import {deleteBook, toggleFavorite} from '../../redux/slices/booksSlices'
import {BsBookmarkStarFill, BsBookmarkStar} from 'react-icons/bs'
import {
  selectTitleFilter,
  selectAuthorFilter,
  selectToggleFilter,
} from '../../redux/slices/filterSlice'
import './BookList.css'

export default function BookList() {
  const books = useSelector((state) => state.books)
  const titleFilter = useSelector(selectTitleFilter)
  const authorFilter = useSelector(selectAuthorFilter)
  const favoriteToggleFilter = useSelector(selectToggleFilter)
  const dispatch = useDispatch()

  const handleToggleFavorite = (id) => {
    dispatch(toggleFavorite(id))
  }

  const handleDeleteBook = (id) => {
    return dispatch(deleteBook(id))
  }

  const filteredBooks = books.filter((book) => {
    const matchesTitle = book.title
      .toLowerCase()
      .includes(titleFilter.toLowerCase())
    const matchesAuthor = book.author
      .toLowerCase()
      .includes(authorFilter.toLowerCase())
    const matchesToggleFilter = favoriteToggleFilter ? book.isFavorite : true
    return matchesTitle && matchesAuthor && matchesToggleFilter
  })

  const highlightMatch = (text, filter) => {
    if (!filter) {
      return text
    }
    const regex = new RegExp(`(${filter})`, 'gi')
		
    return text.split(regex).map((substring, index) => {
      if (substring.toLowerCase() === filter.toLowerCase()) {
        return (
          <span key={index} className="highlight">
            {substring}
          </span>
        )
      }
      return substring
    })
  }

  return (
    <div className="app-block book-list">
      <h2>Books List</h2>
      {books.length === 0 ? (
        <p>No books available</p>
      ) : (
        <ul>
          {filteredBooks.map((book, index) => (
            <li key={book.id}>
              <div className="book-info">
                {++index}. {highlightMatch(book.title, titleFilter)} by{' '}
                <strong>{highlightMatch(book.author, authorFilter)}</strong> ({book.source})
              </div>
              <div className="book-actions">
                <span onClick={() => handleToggleFavorite(book.id)}>
                  {book.isFavorite ? (
                    <BsBookmarkStarFill className="star-icon" />
                  ) : (
                    <BsBookmarkStar className="star-icon" />
                  )}
                </span>
                <button onClick={() => handleDeleteBook(book.id)}>
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
