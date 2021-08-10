import React from 'react'

import { TodoListProp, TodoState } from '../models/todo-types'

import { Button, Card } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

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

    const todoCard = (todo: TodoState) => (
        <Card 
            key={todo.id}
            variant='outlined'
            className={classes.root}
        >
            <div>
                <p>{todo.title}</p>
                <p>{todo.content}</p>
                <p>{todo.expectedEndDate}</p>
                <Button 
                    onClick={() => props.onEditTodo(todo)}
                    variant="outlined" 
                    color="primary"
                >
                    EDIT
                </Button>
                <Button 
                    onClick={() => props.onDeleteTodo(todo.id)} 
                    variant="outlined" 
                    color="secondary"
                >
                    DELETE
                </Button>
            </div>
        </Card>
    ) 

    return (
        <div className={classes.todo_list}>
            <div className="todo-new" >
                <h4 className={classes.root}>New</h4>
                {props.todos.map((todo) => {
                    if(todo.status === 'new') {
                        return todoCard(todo)
                    }else {
                        return <div key='1'></div>
                    }
                })}
            </div>
            <div className="todo-wip">
                <h4 className={classes.root}>Doing</h4>
                {props.todos.map((todo) => {
                    if (todo.status === 'wip') {
                        return todoCard(todo)
                    } else {
                        return <div key='2'></div>
                    }
                })}
            </div>
            <div className="todo-done">
                <h4 className={classes.root}>Done</h4>
                {props.todos.map((todo) => {
                    if (todo.status === 'done') {
                        return todoCard(todo)
                    } else {
                        return <div key='3'></div>
                    }
                })}
            </div>
        </div>
    ) 
}

export default TodoList