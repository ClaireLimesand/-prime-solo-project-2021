import React, { useEffect } from 'react';
import { useHistory } from "react-router";
import LogOutButton from '../LogOutButton/LogOutButton';
import {useDispatch, useSelector} from 'react-redux';
import useReduxStore from '../../hooks/useReduxStore';
import Button from '@mui/material/Button';

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
      <Button onClick={() => history.push('/addfriend')}>Add a Friend</Button>
      <LogOutButton className="btn" />
      <p>HELLOOOOO</p>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
