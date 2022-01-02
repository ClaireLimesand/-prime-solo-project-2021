import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* fetchFriends() {
    try {
        console.log('in fetchFriends')
        const friends = yield axios.get('/api/friends');
        yield put({ type: 'SET_FRIENDS', payload: friends.data });
    } catch (error) {
        console.log('fetchFriends error', error);
    }
}

function* friendsSaga() {
    yield takeEvery('FETCH_FRIENDS', fetchFriends );
}

export default friendsSaga;
