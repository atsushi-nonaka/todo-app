export type Action = {
    type: string
}

export type SortNumber = -1 | 0 | 1

export type TodoState = {
    id: string,
    title: string,
    content: string,
    expectedEndDate: string,
    status: 'new' | 'wip' | 'done'
}

// todo
export type FilterState = {
    text: string,
    sortBy: 'date' | 'a→z' | 'z→a',
    startDate?: string,
    endDate?: string
}

export type TodoProp = {
    onAddTodo?: (title: string, content: string, expectedEndDate: string) => void,
    onEditTodo?: (todo: TodoState) => void,
    todo?: TodoState
}

export type TodoListProp = {
    todos: {
        id: string,
        title: string,
        content: string,
        expectedEndDate: string,
        status: 'new' | 'wip' | 'done'
    }[],
    onDeleteTodo: (id: string) => void,
    onEditTodo: (todo: TodoState) => void
}