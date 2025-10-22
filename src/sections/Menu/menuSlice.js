import { createSlice } from "@reduxjs/toolkit";

export const menuSlice = createSlice({
    name: 'menu',
    initialState: {open: false},
    reducers: {
        toggle: (state) => {
            state.open = !state.open
        },
        show: (state) => {
            state.open = true
        },
        hide: (state) => {
            state.open = false
        }
    }
})

export const {toggle, show, hide} = menuSlice.actions
export default menuSlice.reducer
