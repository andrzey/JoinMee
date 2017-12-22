import userSagas from '../user/user.sagas';

export default function* rootSaga() {
    yield [
        ...userSagas,
    ];
}
