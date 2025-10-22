import { createSlice } from "@reduxjs/toolkit";

export const homeSlice = createSlice({
    name: 'home',
    initialState: {open: true, currentStep: 0},
    reducers: {
        toggle: (state) => {
            state.open = !state.open
        },
        show: (state) => {
            state.open = true
        },
        hide: (state) => {
            state.open = false
        },
        setCurrentStep: (state, action) => {
            state.currentStep = action.payload
        }
    }
})

export const {toggle, show, hide, showDialog, setCurrentStep} = homeSlice.actions
export default homeSlice.reducer