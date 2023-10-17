import {useSelector, useDispatch} from 'react-redux'
import {deleteBook, toggleFavorite} from '../../redux/books/actionCreators'
import {BsBookmarkStarFill, BsBookmarkStar} from 'react-icons/bs'
import './BookList.css'

export default function BookList() {
  const books = useSelector((state) => state.books)
  const dispatch = useDispatch()

  const handleToggleFavorite = (id) => {
    dispatch(toggleFavorite(id))
  }

  const handleDeleteBook = (id) => {
    return dispatch(deleteBook(id))
  }

  return (
    <div className="app-block book-list">
      <h2>Books List</h2>
      {books.length === 0 ? (
        <p>No books available</p>
      ) : (
        <ul>
          {books.map((book, index) => (
            <li key={book.id}>
              <div className="book-info">
                {++index}. {book.title} by <strong>{book.author}</strong>
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
