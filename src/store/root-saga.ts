import happeningSagas from '../happening/happening.sagas';
import userSagas from '../user/user.sagas';

export default function* rootSaga() {
    yield [
        ...userSagas,
        ...happeningSagas,
    ];
}
