import React from "react";
import { useAppDispatch } from "../hooks/hooks";
import dayjs from 'dayjs'

import { endDate, searchByText, sortBy, startDate } from "../slices/filterSlice";

import { TextField } from '@material-ui/core'

export const SortTodo: React.FC = () => {
    const dispatch = useAppDispatch()

    const handleSearchByText = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(searchByText(e.currentTarget.value))
    }

    const handleSortBy = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(sortBy(e.currentTarget.value))
    }

    const handleStartDate = (e: React.ChangeEvent<HTMLInputElement>) => {
        const date = dayjs(e.currentTarget.value)
        dispatch(startDate(date.format('YYYY-MM-DD')))
    }

    const handleEndDate = (e: React.ChangeEvent<HTMLInputElement>) => {
        const date = dayjs(e.currentTarget.value)
        dispatch(endDate(date.format('YYYY-MM-DD')))
    }

    return (
        <div>
            <TextField 
                type="text" 
                placeholder='text' 
                onChange={handleSearchByText}
            />
            <TextField  
                onChange={handleSortBy}
                select
                defaultValue='date'
            >
                <option value='date'>Date</option>
                <option value='a→z'>A→Z</option>
                <option value='z→a'>Z→A</option>
            </TextField>
            <TextField 
                type="date" 
                onChange={handleStartDate}
            />
            <TextField 
                type="date" 
                onChange={handleEndDate}
            />
        </div>
    )
}
