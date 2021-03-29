interface ITodoItem {
    id: number
    title: string
    isDone: boolean
}

type TodoItemState = {
    todoItems: ITodoItem[]
}

type TodoItemAction = {
    type: string
    todoItem: ITodoItem
}

type DispatchType = (args: TodoItemAction) => TodoItemAction
