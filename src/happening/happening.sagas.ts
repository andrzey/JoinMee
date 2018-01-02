import { put, takeLatest } from 'redux-saga/effects';

import { fetchHappenings, fetchHappeningsSucceeded } from './happening.actions';
import { ActionKeys, ActionTypes, IFetchHappenings } from './happening.definitions';
import HappeningService from './happening.service';

const happeningService = new HappeningService();

function* fetchAllHappenings() {
    try {
        const happenings = yield happeningService.fetchHappenings();
        yield put(fetchHappeningsSucceeded(happenings));
    } catch (error) {
        console.error(error);
    }
}

function* fetchHappeningsRequested() {
    yield takeLatest(ActionKeys.HAPPENINGS_FETCH_REQUESTED, fetchAllHappenings);
}

export default [
    fetchHappeningsRequested(),
];
