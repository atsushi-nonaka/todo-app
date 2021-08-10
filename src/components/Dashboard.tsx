import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import TodoList from "./TodoList";

import { deleteTodo } from "../slices/todoSlice";
import { RootState } from "../store/store";
import { useHistory } from "react-router-dom";
import { TodoState } from "../models/todo-types";
import { SortTodo } from "./SortTodo";
import { todoSelector } from "../selectors/selector";

export const Dashboard: React.FC = () => {
    const history = useHistory()
    const todos = useAppSelector((state: RootState) => state.todos)
    const filters = useAppSelector((state: RootState) => state.filters)
    const dispatch = useAppDispatch()

    const editRegisteredTodo = (todo: TodoState) => {
        history.push(`/edit/${todo.id}`, todo);
    }

    const deleteTodoById = (id: string) => {
        dispatch(deleteTodo(id))
    }

    return (
        <div>
            <SortTodo />
            <TodoList 
                todos={todoSelector(todos, filters)} 
                onDeleteTodo={deleteTodoById} 
                onEditTodo={editRegisteredTodo}
            />
        </div>
    )
}
