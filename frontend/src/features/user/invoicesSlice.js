import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    invoices:JSON.parse(localStorage.getItem("invoices")) || []
}

export const invoicesSlice = createSlice({
    name: 'invoices',
    initialState,
    reducers:{
        updateInvoices:(state, action) =>{
            state.invoices.push(action.payload);
            localStorage.setItem("invoices", JSON.stringify(state.invoices));
        }
    }
})

export const {updateInvoices} = invoicesSlice.actions

export default invoicesSlice.reducer