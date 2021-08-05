import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "../slices/filterSlice";
import todoSlice from "../slices/todoSlice";

export const store = configureStore({
    reducer: {
        todos: todoSlice,
        filters: filterSlice
    }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch