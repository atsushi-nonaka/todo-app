import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TodoState } from "../models/todo-types";

const initialState: TodoState[] = []

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<TodoState>) => {
            return [
                ...state,
                action.payload
            ]
        },
        deleteTodo: (state, action: PayloadAction<string>) => {
            return state.filter((todo) => todo.id !== action.payload)
        },
        editTodo: (state, action: PayloadAction<TodoState>) => {
            return state.map((todo) => {
                if (todo.id === action.payload.id) {
                    const content = action.payload.content
                    const title = action.payload.title
                    const expectedEndDate = action.payload.expectedEndDate
                    return {
                        ...todo,
                        title,
                        content,
                        expectedEndDate
                    }
                }
                return todo
            })
        }
    }
})

export const { addTodo, deleteTodo, editTodo } = todoSlice.actions

export default todoSlice.reducer