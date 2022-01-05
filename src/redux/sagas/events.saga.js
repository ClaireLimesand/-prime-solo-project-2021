import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* addEvent(action) {
    console.log('action payload', action.payload)
    try {
        const response = yield axios({
            method: 'POST',
            url: '/api/events',
            data: action.payload
        })
        // yield put({
        //     type: 'FETCH_FRIEND_DETAILS'
        // })
    } catch (error) {
        console.log('addEvent error', error);
    }
}

function* eventsSaga() {
    yield takeEvery('ADD_EVENT', addEvent);
}

export default eventsSaga;
