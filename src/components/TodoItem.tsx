import React from 'react';

import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import { Button, Card } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { TodoItemProp } from '../models/todo-types';

const useStyles = makeStyles({
    root: {
      margin: '2% 5%'
    },
    up: {
        color: '#4caf50',
        borderColor: '#4caf50'
    },
    down: {
        
    }
});

export const TodoItem: React.FC<TodoItemProp> = props => {
    const todo = props.todo
    const classes = useStyles()

    return (
        <Card 
            key={todo.id}
            variant='outlined'
            className={classes.root}
        >
            <div id='todo-item'>
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
                <Button
                    onClick={() => props.onStatusDown(todo)} 
                    variant="outlined" 
                    className={classes.up}
                >
                    <ArrowBackIosIcon/>
                </Button>
                <Button
                    onClick={() => props.onStatusUp(todo)} 
                    variant="outlined" 
                    className={classes.up}
                >
                    <ArrowForwardIosIcon />
                </Button>
            </div>
        </Card>
    )
}