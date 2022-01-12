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
    } catch (error) {
        console.log('addFriend error', error);
    }
}

function* deleteGift(action) {
    console.log('deleteGift action payload', action.payload)
    try {
        const response = yield axios({
            method: 'DELETE',
            url: `/api/gifts/${action.payload}`,
        })
    } catch (error) {
        console.log('deleteGift error', error);
    }
}

function* giftsSaga() {
    yield takeEvery('ADD_GIFT', addGift);
    yield takeEvery('DELETE_GIFT', deleteGift);
}

export default giftsSaga;
