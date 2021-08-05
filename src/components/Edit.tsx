import React from 'react'

import TodoInput from './TodoInput'
import { TodoState } from '../models/todo-types';
import { useAppDispatch } from '../hooks/hooks';
import { editTodo } from '../slices/todoSlice';

export const Edit: React.FC = () => {
    const dispatch = useAppDispatch()

    const editTodoById = (todo: TodoState) => {
        dispatch(editTodo(todo))
    }

    return (
        <div>
            <h1>Edit</h1>
            <TodoInput onEditTodo={editTodoById} />
        </div>
    )
}