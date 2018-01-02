import { combineReducers } from 'redux';

import happenings from '../happening/happening.reducer';
import user from '../user/user.reducer';

const rootReducer = combineReducers({
    happenings,
    user,
});

export default rootReducer;
