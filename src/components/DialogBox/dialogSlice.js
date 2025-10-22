import { createSlice } from "@reduxjs/toolkit";

export const dialogSlice = createSlice({
    name: "dialogBox",
    initialState: {open: false},
    reducers:{
        toggleDialog: (state) => {
            state.open = !state.open
        },
        showDialog: (state) => {
            state.open = true
        },
        hideDialog: (state) => {
            state.open = false
        }
    }
})

export const {toggleDialog, showDialog, hideDialog} = dialogSlice.actions
export default dialogSlice.reducer