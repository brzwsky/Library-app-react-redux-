import {useState} from 'react'
import {useDispatch} from 'react-redux'
import axios from 'axios'
import {addBook} from '../../redux/slices/booksSlices'
import {createBookWithID} from '../../utils/createBookWithID'
import booksData from '../../data/books.json'
import './BookForm.css'

function BookForm() {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()

    if (title && author) {
      dispatch(addBook(createBookWithID({title, author})))

      setTitle('')
      setAuthor('')
    }
    return ''
  }

  const handleAddRAndomBookViaAPI = async () => {
    try {
      const res = await axios.get('http://localhost:4000/random-book')
      if (res?.data?.title && res?.data?.author) {
        dispatch(addBook(createBookWithID(res.data)))
      }
    } catch (error) {
      console.error('Error fetching random book', error)
    }
  }

  const handleAddRandomBook = () => {
    const randomIndex = Math.floor(Math.random() * booksData.length)
    const randomBook = booksData[randomIndex]

    dispatch(addBook(createBookWithID(randomBook)))
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
