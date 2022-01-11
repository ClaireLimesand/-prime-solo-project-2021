import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* fetchEvent(action) {
    try {
        const response = yield axios({
            method: 'GET',
            url: `api/events/${action.payload}`
        })
        console.log('fetchEvent!', response.data)
        const eventToEdit = response.data;
        yield put ({
            type: 'SET_EVENT_TO_EDIT',
            payload: eventToEdit
        })
    }   catch (error) {
        console.log(error)
    }
}

function* editEvent(action) {
    console.log('edit event', action.payload)
    try {
        yield axios({
            method: 'PUT',
            url: `/api/events/${action.payload.id}`,
            data: action.payload
        })
    }   catch (error) {
        console.log(error)
    }
}

function* editSaga() {
    yield takeEvery('FETCH_EVENT', fetchEvent);
    yield takeEvery('EDIT_EVENT', editEvent);
}

export default editSaga;