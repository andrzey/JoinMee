import { ActionKeys, ActionTypes } from './user.definitions';

export default function userReducer(state = {}, action: ActionTypes) {
    switch (action.type) {
        case ActionKeys.USER_FETCH_SUCCEEDED:
            return { ...state, user: action.user };
        default:
            return state;
    }
}
