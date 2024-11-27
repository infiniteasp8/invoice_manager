import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    serialNumber : '',
    customerName: '',
    totalAmount: '',
    date: ''
}

export const invoicesSlice = createSlice({
    name: 'invoices',
    initialState,
    reducers:{
        updateInvoices:(state, action) =>{
            state.serialNumber = action.payload.serialNumber;
            state.customerName = action.payload.customerName;
            state.totalAmount = action.payload.totalAmount;
            state.date = action.payload.date;
        }
    }
})

export const {updateInvoices} = invoicesSlice.actions

export default invoicesSlice.reducer