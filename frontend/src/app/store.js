import { configureStore, combineReducers} from '@reduxjs/toolkit'
import fileReducer from '../features/user/userSlice'
import invoiceReducer from '../features/user/invoicesSlice'
import customerReducer from "../features/user/customersSlice"
import productReducer from "../features/user/productsSlice"

const rootReducer = combineReducers({
    user: fileReducer,
    invoices: invoiceReducer,
    customers: customerReducer,
    products: productReducer
});
  
export const store = configureStore({
    reducer : rootReducer
})