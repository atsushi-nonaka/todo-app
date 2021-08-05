import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FilterState } from "../models/todo-types";

const initialState: FilterState = {
    text: '',
    sortBy: 'date'
}

export const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        searchByText: (state, action: PayloadAction<string>) => {
            state.text = action.payload
            return state
        },
        sortBy: (state, action: PayloadAction<string>) => {
            if (action.payload === 'date') {
                state.sortBy = 'date'
            } else if (action.payload === 'a→z') {
                state.sortBy = 'a→z'
            } else if (action.payload === 'z→a') {
                state.sortBy = 'z→a'
            }
            return state
        },
        startDate: (state, action: PayloadAction<string>) => {
            state.startDate = action.payload
            return state
        },
        endDate: (state, action: PayloadAction<string>) => {
            state.endDate = action.payload
            return state
        }
    }
})

export const { searchByText, sortBy, startDate, endDate } = filterSlice.actions

export default filterSlice.reducer