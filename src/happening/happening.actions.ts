import {
    ActionKeys,
    IFetchHappenings,
    IFetchHappeningsSucceeded,
} from './happening.definitions';

export const fetchHappenings = (): IFetchHappenings => {
    return {
        type: ActionKeys.HAPPENINGS_FETCH_REQUESTED,
    };
};

export const fetchHappeningsSucceeded = (happenings: any): IFetchHappeningsSucceeded => {
    return {
        happenings,
        type: ActionKeys.HAPPENINGS_FETCH_SUCCEEDED,
    };
};
