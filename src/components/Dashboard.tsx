import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import TodoList from "./TodoList";

import { deleteTodo, editTodo } from "../slices/todoSlice";
import { RootState } from "../store/store";
import { useHistory } from "react-router-dom";
import { TodoState } from "../models/todo-types";
import { todoSelector } from "../selectors/selector";

export const Dashboard: React.FC = () => {
    const history = useHistory()
    const todos = useAppSelector((state: RootState) => state.todos)
    const filters = useAppSelector((state: RootState) => state.filters)
    const dispatch = useAppDispatch()

    const editRegisteredTodo = (todo: TodoState) => {
        history.push(`/edit/${todo.id}`, todo);
    }

    const statusDown = (todo: TodoState) => {
        if (todo.status === 'done') {
            const status = 'wip'
            todo = {
                ...todo,
                status
            }
        }else if(todo.status === 'wip') {
            const status = 'new'
            todo = {
                ...todo,
                status
            }
        }else {
            return
        }
        dispatch(editTodo(todo))
    }

    const statusUp = (todo: TodoState) => {
        if (todo.status === 'new') {
            const status = 'wip'
            todo = {
                ...todo,
                status
            }
        }else if(todo.status === 'wip') {
            const status = 'done'
            todo = {
                ...todo,
                status
            }
        }else {
            return
        }
        dispatch(editTodo(todo))
    }

    const deleteTodoById = (id: string) => {
        dispatch(deleteTodo(id))
    }

    return (
        <div>
            <TodoList 
                todos={todoSelector(todos, filters)} 
                onDeleteTodo={deleteTodoById} 
                onEditTodo={editRegisteredTodo}
                onStatusDown={statusDown}
                onStatusUp={statusUp}
            />
        </div>
    )
}
