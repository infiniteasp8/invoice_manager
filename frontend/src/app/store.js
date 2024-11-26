import { configureStore} from '@reduxjs/toolkit'
import fileReducer from '../features/user/userSlice'

export const store = configureStore({
    reducer : fileReducer
})