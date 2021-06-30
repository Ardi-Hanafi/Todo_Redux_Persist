import * as actionName from './loginString';

const loginInitialState = {
    login: {
        "username": null,
        "role": null,
        "isLogedin": false
    }
};

const initialState = {
    ...loginInitialState,
    action: ""
};



export default function loginReducer(state = initialState, action) {
    switch(action.type) {
        case actionName.USER_LOGIN:
            return {
                ...state,
                action: action.type,
                login: action.payload
            };
        case actionName.USER_LOGOUT:
            return {
                ...state,
                acrion: action.type,
                login: { ...loginInitialState.login }
            };
        default:
            return state;
    }
}