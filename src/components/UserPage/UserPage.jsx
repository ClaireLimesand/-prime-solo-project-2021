import React, { useEffect } from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useDispatch, useSelector} from 'react-redux';
import useReduxStore from '../../hooks/useReduxStore';

function UserPage() {
  const dispatch = useDispatch();
  const store = useReduxStore();

  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);

  useEffect(() => {
    console.log('in useEffect FETCH_FRIENDS');
    dispatch({ type: 'FETCH_FRIENDS' });
  }, []);

  return (
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      <p>Your ID is: {user.id}</p>
      <tbody>
        {/* {store.friends.map((friendz, index) => (
          <tr key={index}>
            <td>{friendz.name}</td>
          </tr>
        ))} */}
      </tbody>
      <LogOutButton className="btn" />
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
