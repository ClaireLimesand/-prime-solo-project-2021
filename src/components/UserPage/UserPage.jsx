import React, { useEffect } from 'react';
import { useHistory } from "react-router";
import LogOutButton from '../LogOutButton/LogOutButton';
import {useDispatch, useSelector} from 'react-redux';
import useReduxStore from '../../hooks/useReduxStore';

function UserPage() {

  const history = useHistory();
  const dispatch = useDispatch();
  const store = useReduxStore();

  const user = useSelector((store) => store.user);
  const friendsReducer = useSelector((store) => store.friendsReducer);

  useEffect(() => {
    console.log('in useEffect FETCH_FRIENDS');
    dispatch({ type: 'FETCH_FRIENDS' });
  }, []);

  const goToFriend = (friend) => {
    console.log('going to friend page')
    // dispatch ({
    //     type:'FETCH_FREIND_DETAILS',
    //     payload: friend.id
    // });
    history.push(`/friendpage/${friend.id}`);
}

  return (
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      <p>Your ID is: {user.id}</p>
      <tbody>
        {store.friendsReducer.map((friend, index) => (
          <tr key={index}>
            <td onClick={()=>{goToFriend(friend)}}>{friend.name}</td>
          </tr>
        ))}
      </tbody>
      <LogOutButton className="btn" />
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
