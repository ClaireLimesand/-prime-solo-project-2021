import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* addGift(action) {
    console.log('action payload', action.payload)
    try {
        const response = yield axios({
            method: 'POST',
            url: '/api/gifts',
            data: action.payload
        })
        // yield put({
        //     type: 'FETCH_FRIEND_DETAILS'
        // })
    } catch (error) {
        console.log('addFriend error', error);
    }
}

function* giftsSaga() {
    yield takeEvery('ADD_GIFT', addGift);
}

export default giftsSaga;
