import { configureStore, combineReducers} from '@reduxjs/toolkit'
import fileReducer from '../features/user/userSlice'
import invoiceReducer from '../features/user/invoicesSlice'

const rootReducer = combineReducers({
    user: fileReducer,
    invoices: invoiceReducer,
});
  
export const store = configureStore({
    reducer : rootReducer
})