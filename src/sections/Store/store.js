import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "../Menu/menuSlice";
import homeReducer from "../Home/homeSlice.js"
import dialogBoxReducer from "../../components/DialogBox/dialogSlice.js";
import selectionSlice from "../Home/selectionSlice.js";


export const store = configureStore({
    reducer: {
        menu: menuReducer,
        home: homeReducer,
        dialogBox: dialogBoxReducer,
        selection: selectionSlice
    }
})
