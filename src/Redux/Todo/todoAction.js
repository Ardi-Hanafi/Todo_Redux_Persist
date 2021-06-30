import * as actionName from './todoString';

export const addTodo = (data) => ({
    type: actionName.TODO_ADD,
    payload: data
});
export const updateTodo = ({ param, data }) => ({
    type: actionName.TODO_UPDATE,
    payload: { param, data }
});
export const deleteTodo = (param) => ({
    type: actionName.TODO_DELETE,
    payload: param
});