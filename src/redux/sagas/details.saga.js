// import axios from 'axios';
// import { put, takeEvery } from 'redux-saga/effects';

// function* editFriendDetails(action) {
//     console.log('*****', action.payload)
//     try {
//         console.log('in fetchFriends')
//         const details = yield axios.put({
//             type: 'PUT',
//             url: '/api/friends',
//             payload: action.payload
//         });
//         yield put({ 
//             type: 'FETCH_FRIEND_DETAILS', 
//             payload: details.data 
//         });
//     } catch (error) {
//         console.log('fetchFriends error', error);
//     }
// }

// function* detailsSaga() {
//     yield takeEvery('EDIT_FRIEND_DETAILS', editFriendDetails);
// }

// export default detailsSaga;
