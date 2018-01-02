export enum ActionKeys {
    USER_FETCH_REQUESTED = '@user/USER_FETCH_REQUESTED',
    USER_FETCH_SUCCEEDED = '@user/USER_FETCH_SUCCEEDED',
}

export interface ILogin {
    type: ActionKeys.USER_FETCH_REQUESTED;
    token: string;
}

export interface ILoginSucceeded {
    type: ActionKeys.USER_FETCH_SUCCEEDED;
    user: any;
}

export type ActionTypes =
    | ILogin
    | ILoginSucceeded;
