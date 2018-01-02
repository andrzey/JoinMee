import { ActionKeys, ActionTypes } from './happening.definitions';

export default function happeningReducer(state = [], action: ActionTypes) {
    switch (action.type) {
        case ActionKeys.HAPPENINGS_FETCH_SUCCEEDED:
            return { ...state, happenings: action.happenings };
        default:
            return state;
    }
}
