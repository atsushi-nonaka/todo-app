import React from "react";
// import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";

import { useAppDispatch } from "../hooks/hooks";
import { addTodo } from "../slices/todoSlice";
import TodoInput from "./TodoInput";

export const Registration: React.FC = () => {
    const dispatch = useAppDispatch()

    const addNewTodo = (title: string, content: string, expectedEndDate: string) => {
        dispatch(addTodo({
            id: uuid(),
            title,
            content,
            expectedEndDate
        }))
    }

    return (
        <div>
            <h1>Registration</h1>
            <TodoInput onAddTodo={addNewTodo} />
        </div>
    )
}