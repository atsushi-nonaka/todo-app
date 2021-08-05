import React from 'react'

 import { TodoListProp } from '../models/todo-types'

const TodoList: React.FC<TodoListProp> = props => {
    return (
        <div>
            <ul>
                {props.todos.map((todo) => {
                    return <li key={todo.id}>
                        <p>{todo.title}</p>
                        <p>{todo.content}</p>
                        <p>{todo.expectedEndDate}</p>
                        <button onClick={() => props.onEditTodo(todo)}>EDIT</button>
                        <button onClick={() => props.onDeleteTodo(todo.id)} >DELETE</button>
                    </li>
                })}
            </ul>
        </div>
    ) 
}

export default TodoList