export enum ActionKeys {
    USER_FETCH_REQUESTED = '@user/USER_FETCH_REQUESTED',
    USER_FETCH_SUCCEEDED = '@user/USER_FETCH_SUCCEEDED',
}

export interface ILoginAction {
    type: ActionKeys.USER_FETCH_REQUESTED;
    token: string;
}

export interface ILoginActionSucceeded {
    type: ActionKeys.USER_FETCH_SUCCEEDED;
    user: any;
}

export type ActionTypes =
    | ILoginAction
    | ILoginActionSucceeded;
