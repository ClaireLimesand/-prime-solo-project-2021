import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* editGift(action) {
    console.log('edit gift', action.payload)
    try {
        yield axios({
            method: 'PUT',
            url: `/api/gifts/${action.payload.id}`,
            data: action.payload
        })
    }   catch (error) {
        console.log(error)
    }
}

function* editGiftSaga() {
    yield takeEvery('EDIT_GIFT', editGift);
}

export default editGiftSaga;