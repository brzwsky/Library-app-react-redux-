import {useDispatch, useSelector} from 'react-redux'
import {
  setTitleFilter,
  setAuthorFilter,
  selectTitleFilter,
  selectAuthorFilter,
  setToggleFilter,
  resetFilters,
  selectToggleFilter,
} from '../../redux/slices/filterSlice'
import './Filter.css'

function Filter() {
  const dispatch = useDispatch()
  const titleFilter = useSelector(selectTitleFilter)
  const authorFilter = useSelector(selectAuthorFilter)
  const onlyToggleFilter = useSelector(selectToggleFilter)

  const handleTitleFilterChange = (e) => {
    dispatch(setTitleFilter(e.target.value))
  }

  const handleAuthorFilterChange = (e) => {
    dispatch(setAuthorFilter(e.target.value))
  }

  const handleToggleFavorite = (e) => {
    dispatch(setToggleFilter())
  }

  const handleResetTitleFilter = () => {
    dispatch(resetFilters())
  }

  return (
    <div className="app-block filter">
      <div className="filter-row">
        <div className="filter-group">
          <input
            onChange={handleTitleFilterChange}
            value={titleFilter}
            type="text"
            placeholder="Filter by title.."
          />
        </div>
        <div className="filter-group">
          <input
            onChange={handleAuthorFilterChange}
            value={authorFilter}
            type="text"
            placeholder="Filter by author.."
          />
        </div>
        <div className="filter-group">
          <label>
            <input
              onChange={handleToggleFavorite}
              checked={onlyToggleFilter}
              type="checkbox"
            />
						Only Favorite
          </label>
        </div>
        <button type="button" onClick={handleResetTitleFilter}>
          Reset Filters
        </button>
      </div>
    </div>
  )
}

export default Filter
