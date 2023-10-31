import {useEffect} from 'react'
import {ToastContainer, toast} from 'react-toastify'
import {useDispatch, useSelector} from 'react-redux'
import {selectErrorMessage, clearError} from '../../redux/slices/errorSlice'
import 'react-toastify/dist/ReactToastify.css'

export default function Error() {
  const errorMessage = useSelector(selectErrorMessage)
  const dispatch = useDispatch()

  useEffect(() => {
    if (errorMessage) {
      toast.warn(errorMessage)
      dispatch(clearError())
    }
  }, [errorMessage, dispatch])

  return <ToastContainer position="top-right" autoClose={2000} />
}
