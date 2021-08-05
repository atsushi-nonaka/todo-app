import dayjs from 'dayjs'
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';

import { FilterState, SortNumber, TodoState } from "../models/todo-types";

//extend
dayjs.extend(isSameOrBefore)
dayjs.extend(isSameOrAfter)

export const todoSelector = (todos: TodoState[], { text, sortBy, startDate, endDate }: FilterState) => {
    const filterdTodos = todos.filter((todo) => {
        const filteredTitleOrContent = todo.title.toLowerCase().includes(text.toLowerCase()) || todo.content.toLowerCase().includes(text.toLowerCase()) 
        let isStartDate = true
        if (startDate) {
            const startDateDayjs = dayjs(startDate)
            isStartDate = startDateDayjs.isSameOrBefore(todo.expectedEndDate)
        } 
        let isEndDate = true
        if (endDate) {
            const endDateDayjs = dayjs(endDate)
            isEndDate = endDateDayjs.isSameOrAfter(todo.expectedEndDate)
        }
        return filteredTitleOrContent && isStartDate && isEndDate
    }).sort((a: TodoState, b: TodoState) => {
        if (sortBy === 'date') {
            return sortByDate(a, b)
        }else if(sortBy === 'a→z') {
            return sortByAtoZ(a, b)
        }else {
            return sortByZtoA(a, b)
        }
    })
    return filterdTodos;
}

const sortByDate = (a: TodoState, b: TodoState): SortNumber => {
    if (Date.parse(a.expectedEndDate) > Date.parse(b.expectedEndDate)) {
        return -1
    }else if (Date.parse(a.expectedEndDate) < Date.parse(b.expectedEndDate)) {
        return 1
    }
    return 0
}

const sortByAtoZ = (a: TodoState, b: TodoState): SortNumber => {
    if (a.title.toLowerCase() > b.title.toLowerCase()) {
        return 1
    }else if (a.title.toLowerCase() < b.title.toLowerCase()) {
        return -1
    }
    return 0
}

const sortByZtoA = (a: TodoState, b: TodoState): SortNumber => {
    if (a.title.toLowerCase() < b.title.toLowerCase()) {
        return 1
    }else if (a.title.toLowerCase() > b.title.toLowerCase()) {
        return -1
    }
    return 0
}
