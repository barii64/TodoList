﻿import ToDoTable from './ToDoTable.jsx';
import todoList from "./reducer.jsx"
const { createStore } = Redux;
const { Provider, connect } = ReactRedux;


var destination = document.getElementById('root');
var store = createStore(todoList);
store.subscribe(() => console.log(store.getState()));



ReactDOM.render(
    <Provider store={store}>
        <ToDoTable />
    </Provider>,
    destination
);
