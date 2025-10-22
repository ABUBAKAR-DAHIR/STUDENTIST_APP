import { createSlice } from "@reduxjs/toolkit";

export const selectionSlice = createSlice({
    name: 'selection',
    initialState: {
        selections: [],
        currentPdf: null
    },
    reducers: {
        addSelection: (state, action)=>{
            if(!state.selections.includes(action.payload)) state.selections.push(action.payload)
        },

        removeSelection: (state, action)=>{
            state.selections =  state.selections.filter((selection) => selection !== action.payload)
        },

        popSelection: (state)=>{
            if(state.selections.length > 0) state.selections.pop()
        },

        clearSelection: (state)=>{
            state.selections = []
        },

        setCurrentPdf: (state, action) => {
            state.currentPdf = action.payload
        }
    }
})

export const {addSelection, removeSelection, popSelection, clearSelection, setCurrentPdf} = selectionSlice.actions
export default selectionSlice.reducer