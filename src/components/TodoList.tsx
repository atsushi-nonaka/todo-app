import React from 'react'

import { TodoListProp, TodoState } from '../models/todo-types'

import { makeStyles } from '@material-ui/core/styles';
import { TodoItem } from './TodoItem';

const useStyles = makeStyles({
    root: {
      margin: '2% 5%'
    },
    todo_list: {
      display: 'flex'
    }
});

const TodoList: React.FC<TodoListProp> = props => {
    const classes = useStyles();

    const todoItem = (todo: TodoState) => (
        <TodoItem 
            todo={todo} 
            onDeleteTodo={props.onDeleteTodo}
            onEditTodo={props.onEditTodo}
            onStatusDown={props.onStatusDown}
            onStatusUp={props.onStatusUp}
            key={todo.id}
        />
    )

    return (
        <div className={classes.todo_list}>
            <div className="todo-new" >
                <h4 className={classes.root}>New</h4>
                {props.todos.map((todo) => {
                    if(todo.status === 'new') {
                        return todoItem(todo)
                    }
                    return <div key={todo.id}></div>
                })}
            </div>
            <div className="todo-wip">
                <h4 className={classes.root}>Doing</h4>
                {props.todos.map((todo) => {
                    if (todo.status === 'wip') {
                        return todoItem(todo)
                    } 
                    return <div key={todo.id}></div>
                })}
            </div>
            <div className="todo-done">
                <h4 className={classes.root}>Done</h4>
                {props.todos.map((todo) => {
                    if (todo.status === 'done') {
                        return todoItem(todo)
                    } 
                    return <div key={todo.id}></div>
                })}
            </div>
        </div>
    ) 
}

export default TodoList