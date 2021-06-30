import * as actionName from './loginString';

export const userLogin = (data) => ({
    type: actionName.USER_LOGIN,
    payload: data
});
export const userLogout = () => ({
    type: actionName.USER_LOGOUT
});