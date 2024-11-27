import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products:JSON.parse(localStorage.getItem("products")) || []
}

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers:{
        addProduct: (state, action) => {
            state.products.push(action.payload);
            localStorage.setItem("products", JSON.stringify(state.products));
        },
    }
})

export const {addProduct} = productsSlice.actions

export default productsSlice.reducer