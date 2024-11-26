import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    fileUploaded: false
}

export const userSlice = createSlice({
    name: 'uploadDone',
    initialState,
    reducers:{
        addFile:(state)=>{
           state.fileUploaded = true;
        }
    }
})

export const {addFile} = userSlice.actions

export default userSlice.reducer
