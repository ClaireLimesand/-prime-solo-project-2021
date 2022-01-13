import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* fetchEvents() {
    try {
        console.log('in fetchEvents')
        const events = yield axios.get('/api/events');
        yield put({ 
            type: 'SET_EVENTS', 
            payload: events.data 
        });
    } catch (error) {
        console.log('fetchEvents error', error);
    }
}

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
    } catch (error) {
        console.log('deleteEvent error', error);
    }
}

function* eventsSaga() {
    yield takeEvery ('FETCH_EVENTS', fetchEvents);
    yield takeEvery('ADD_EVENT', addEvent);
    yield takeEvery('DELETE_EVENT', deleteEvent);
}

export default eventsSaga;
