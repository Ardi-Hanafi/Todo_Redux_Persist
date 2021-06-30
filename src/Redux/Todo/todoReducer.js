import * as actionName from './todoString';

const todoInitialState = {
    todo: []
}

const initialState = {
    ...todoInitialState,
    action: "",
}

export default function todoReducer(state = initialState, action) {
    switch(action.type) {
        case actionName.TODO_ADD:
            return {
                ...state,
                action: action.type,
                todo: [...state.todo, action.payload]
            };
        case actionName.TODO_DELETE:
            return {
                ...state,
                action: action.type,
                todo: state.todo.filter((data, index) => index !== action.payload)
            };
        case actionName.TODO_UPDATE:
            state.todo.splice(action.payload.param, 1, action.payload.data)
            return {
                ...state,
                action: action.type,
                todo: state.todo
            };
        default:
            return state;
    }
}