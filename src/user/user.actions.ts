import { ActionKeys, ILogin, ILoginSucceeded } from './user.definitions';

export const loginUser = (token: string): ILogin => {
    return {
        token,
        type: ActionKeys.USER_FETCH_REQUESTED,
    };
};

export const loginUserSucceeded = (user: any): ILoginSucceeded => {
    return {
        type: ActionKeys.USER_FETCH_SUCCEEDED,
        user,
    };
};
