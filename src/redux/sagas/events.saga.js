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
    } catch (error) {
        console.log('addEvent error', error);
    }
}

function* deleteEvent(action) {
    console.log('deleteEvent action payload', action.payload)
    try {
        const response = yield axios({
            method: 'DELETE',
            url: `/api/events/${action.payload}`,
    })
    yield put({
        type: 'FETCH_FRIENDS'
    })
    } catch (error) {
        console.log('deleteEvent error', error);
    }
}

function* eventsSaga() {
    yield takeEvery('ADD_EVENT', addEvent);
    yield takeEvery('DELETE_EVENT', deleteEvent);
}

export default eventsSaga;
