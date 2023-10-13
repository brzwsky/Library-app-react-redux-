import {useState} from 'react'
import './BookForm.css'

function BookForm() {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    if (title && author) {
      setTitle('')
      setAuthor('')
      // return {
      //   type, payload,
      // }
    }
    // const {type, payload} = action
    // return [...state, action.dispatch]
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
        <button onSubmit={handleSubmit}>Add Book</button>
      </form>
    </div>
  )
}

export default BookForm
