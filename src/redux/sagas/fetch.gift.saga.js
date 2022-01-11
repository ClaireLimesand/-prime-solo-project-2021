import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* fetchGift(action) {
    try {
        const response = yield axios({
            method: 'GET',
            url: `api/gifts/${action.payload}`
        })
        console.log('fetchGift!', response.data)
        const giftToEdit = response.data;
        yield put ({
            type: 'SET_GIFT_TO_EDIT',
            payload: giftToEdit
        })
    }   catch (error) {
        console.log(error)
    }
}

function* fetchGiftSaga() {
    yield takeEvery('FETCH_GIFT', fetchGift);
}

export default fetchGiftSaga;