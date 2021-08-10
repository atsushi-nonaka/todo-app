import React, { useEffect, useState } from 'react'
import Ajv from 'ajv'
import dayjs from 'dayjs'
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';

import { TodoProp, TodoState } from '../models/todo-types'
import { useHistory } from 'react-router'
import { useLocation } from 'react-router-dom';

import { Button, TextField } from '@material-ui/core'

//extend
dayjs.extend(isSameOrAfter)

const TodoInput: React.FC<TodoProp> = props => {
    const history = useHistory<TodoState>()
    const location = useLocation()

    const [titleState, setTitleState] = useState<string>('')
    const [contentState, setContentState] = useState<string>('')
    const [expectedEndDateState, setExpectedEndDateState] = useState<string>('')
    const [statusState, setStatusState] = useState<'new' | 'wip' | 'done'>('new')

    useEffect(() => {
        history.location.state ? setTitleState(history.location.state.title) : setTitleState('')
        history.location.state ? setContentState(history.location.state.content) : setContentState('')
        history.location.state ? setExpectedEndDateState(history.location.state.expectedEndDate) : setExpectedEndDateState('')
        history.location.state ? setStatusState(history.location.state.status) : setStatusState('new')
    }, [history.location.state])

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault()
        const title = titleState!.trim()
        const content = contentState!.trim()
        const expectedEndDate = expectedEndDateState
        const status = statusState

        if (!validateTitle(title)) {
            alert('Please write title between 5 - 10 letters')
            return
        }
        if (!validateContent(content)) {
            alert('Please write title between 5 - 10 letters')
            return
        }
        if (!validateDate(expectedEndDate)) {
            alert('Please modify date')
            return
        }
        if (props.onAddTodo){
            props.onAddTodo(title, content, expectedEndDate)
        }else if (props.onEditTodo){
            const todo = location.state as TodoState
            const id = todo.id;
            props.onEditTodo({ id , title, content, expectedEndDate, status })
        }
        clearInput()
        history.push('/')
    }

    const clearInput = () => {
        setTitleState('')
        setContentState('')
    }

    const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        const title = e.currentTarget.value
        setTitleState(title)
    }

    const handleContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const content = e.currentTarget.value
        setContentState(content)
    }

    const handleDate = (e: React.ChangeEvent<HTMLInputElement>) => {
        const date = e.currentTarget.value
        setExpectedEndDateState(date)
    }

    const validateTitle = (title: string) => {
        const ajv = new Ajv()
        const validate = ajv.compile({ minLength: 5, maxLength: 10 })
        return validate(title)
    }

    const validateContent = (content: string) => {
        const ajv = new Ajv()
        const validate = ajv.compile({ minLength: 5, maxLength: 200 })
        return validate(content)
    }

    const validateDate = (expectedEndDate: string) => {
        const date = dayjs(expectedEndDate)
        const nowDate = dayjs().format('YYYY-MM-DD')
        if (date.isSameOrAfter(nowDate)) {
            return true
        }
        return false
    }

    return (
        <div className='todo-input'>
            <form onSubmit={submitHandler}>
                <TextField 
                    type="text" 
                    placeholder='please input title' 
                    value={titleState} 
                    onChange={handleTitle} 
                    label='Title' 
                    variant='outlined'
                />
                <TextField 
                    placeholder="please input content" 
                    value={contentState} 
                    onChange={handleContent} 
                    multiline 
                    rows={4} 
                    label='Content' 
                    variant='outlined'
                />
                <TextField 
                    type="date" 
                    value={expectedEndDateState} 
                    onChange={handleDate}
                />
                <Button 
                    variant="outlined" 
                    color="primary" 
                    type='submit'
                >Add Todo</Button>
            </form>
        </div>
    )
}

export default TodoInput