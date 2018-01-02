export enum ActionKeys {
    HAPPENINGS_FETCH_REQUESTED = '@user/HAPPENINGS_FETCH_REQUESTED',
    HAPPENINGS_FETCH_SUCCEEDED = '@user/HAPPENINGS_FETCH_SUCCEEDED',
}

export interface IFetchHappenings {
    type: ActionKeys.HAPPENINGS_FETCH_REQUESTED;
}

export interface IFetchHappeningsSucceeded {
    type: ActionKeys.HAPPENINGS_FETCH_SUCCEEDED;
    happenings: any;
}

export type ActionTypes =
    | IFetchHappenings
    | IFetchHappeningsSucceeded;
