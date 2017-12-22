import { ActionKeys, ILoginAction, ILoginActionSucceeded } from './user.definitions';

export const loginUser = (token: string): ILoginAction => {
    return {
        token,
        type: ActionKeys.USER_FETCH_REQUESTED,
    };
};

export const loginUserSucceeded = (user: any): ILoginActionSucceeded => {
    return {
        type: ActionKeys.USER_FETCH_SUCCEEDED,
        user,
    };
};
