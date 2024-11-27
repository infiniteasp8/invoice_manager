import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    fileUploaded: JSON.parse(localStorage.getItem("user")) || false,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        addFile:(state)=>{
           state.fileUploaded = true;
           localStorage.setItem("user",JSON.stringify(true));
        }
    }
})

export const {addFile} = userSlice.actions

export default userSlice.reducer
