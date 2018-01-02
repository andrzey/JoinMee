import { put, takeLatest } from 'redux-saga/effects';

import { loginUserSucceeded } from './user.actions';
import { ActionKeys, ActionTypes, ILogin } from './user.definitions';
import UserService from './user.service';

const userService = new UserService();

function* facebookLogin(action: ILogin) {
    try {
        const user = yield userService.loginWithFacebook(action.token);
        yield put(loginUserSucceeded(user));
    } catch (error) {
        console.error(error);
    }
}

function* loginWithFacebookRequested() {
    yield takeLatest(ActionKeys.USER_FETCH_REQUESTED, facebookLogin);
}

export default [
    loginWithFacebookRequested(),
];
