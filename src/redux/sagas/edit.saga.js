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

function* editSaga() {
    yield takeEvery('FETCH_EVENT', fetchEvent);
}

export default editSaga;