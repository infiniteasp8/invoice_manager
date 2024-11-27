import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    customers:JSON.parse(localStorage.getItem('customers')) || []
}

export const customersSlice = createSlice({
    name: 'customers',
    initialState,
    reducers:{
        updateCustomer:(state, action) =>{
            state.customers.push(action.payload);
            localStorage.setItem('customers',JSON.stringify(state.customers));
        }
    }
})

export const {updateCustomer} = customersSlice.actions

export default customersSlice.reducer