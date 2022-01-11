import { all } from 'redux-saga/effects';
import loginSaga from './login.saga';
import registrationSaga from './registration.saga';
import userSaga from './user.saga';
import friendsSaga from './friends.saga';
import giftsSaga from './gifts.saga';
import eventsSaga from './events.saga';
// import detailsSaga from './details.saga';
import editSaga from './edit.saga';
import fetchGiftSaga from './fetch.gift.saga';
import editGiftSaga from './edit.gift.saga';
import editGiftReducer from '../reducers/edit.gift.reducer';

// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    loginSaga(), // login saga is now registered
    registrationSaga(),
    userSaga(),
    friendsSaga(),
    giftsSaga(),
    eventsSaga(),
    // detailsSaga(),
    editSaga(),
    fetchGiftSaga(),
    editGiftSaga(),
  ]);
}
