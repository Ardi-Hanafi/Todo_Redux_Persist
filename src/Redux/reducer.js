import { combineReducers } from 'redux';
import loginReducer from './Login/loginReducer';
import todoReducer from './Todo/todoReducer';

const reducer = combineReducers({
    todo: todoReducer,
    login: loginReducer
});

export default reducer;