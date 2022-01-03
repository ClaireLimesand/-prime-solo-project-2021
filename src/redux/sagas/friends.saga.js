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

function* addFriend(action) {
    console.log('action payload', action.payload)
    try {
        const response = yield axios({
            method: 'POST',
            url: '/api/friends',
            data: action.payload
        })
        yield put({
            type: 'FETCH_FRIENDS'
        })
    } catch (error) {
        console.log('addFriend error', error);
    }
}

function* friendsSaga() {
    yield takeEvery('FETCH_FRIENDS', fetchFriends );
    yield takeEvery('ADD_FRIEND', addFriend );
}

export default friendsSaga;
