import {useState} from 'react'
import {useDispatch} from 'react-redux'
import {addBook, fetchBook} from '../../redux/slices/booksSlices'
import {setError} from '../../redux/slices/errorSlice'
import {createBookWithID} from '../../utils/createBookWithID'
import booksData from '../../data/books.json'
import './BookForm.css'

function BookForm() {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const dispatch = useDispatch()

  const handleAddRandomBook = () => {
    const randomIndex = Math.floor(Math.random() * booksData.length)
    const randomBook = booksData[randomIndex]

    dispatch(addBook(createBookWithID(randomBook, 'random')))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (title && author) {
      dispatch(addBook(createBookWithID({title, author}, 'manual')))

      setTitle('')
      setAuthor('')
    }
    dispatch(setError('You should fill title and author first!'))
  }

  const handleAddRAndomBookViaAPI = () => {
    dispatch(fetchBook())
  }

  return (
    <div className="app-block book-form">
      <h2>Add a new book</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="author">Author</label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <button type="submit">Add Book</button>
        <button type="button" onClick={handleAddRandomBook}>
          Add random Book
        </button>
        <button type="button" onClick={handleAddRAndomBookViaAPI}>
          Add Random via API
        </button>
      </form>
    </div>
  )
}

export default BookForm
