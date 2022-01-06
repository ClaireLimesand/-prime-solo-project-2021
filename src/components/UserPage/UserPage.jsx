import React, { useEffect } from 'react';
import { useHistory } from "react-router";
import LogOutButton from '../LogOutButton/LogOutButton';
import {useDispatch, useSelector} from 'react-redux';
import useReduxStore from '../../hooks/useReduxStore';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { Card } from '@mui/material';
import { CardHeader } from '@mui/material';
import { CardContent } from '@mui/material';
import { Divider } from '@mui/material';


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
      
      {/* <tbody>
        {store.friendsReducer.map((friend, index) => (
          <tr key={index}>
            <td onClick={()=>{goToFriend(friend)}}>{friend.name}</td>
          </tr>
        ))}
      </tbody> */}
      
      <Grid container 
            spacing={2}
            direction="column"
            justifyContent="flex-start"
            alignItems="stretch">
      {
      store.friendsReducer.map(friend => (
        <Grid item xs={6}>
          <Card className={"friendCard"} onClick={()=>{goToFriend(friend)}}>
            <CardContent className={"MuiCardContent-root"}>
              <Grid container justify="space-evenly">
                <label>{friend.name}</label>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
          ))
        }
      </Grid>
      
      <Button  
        variant="contained" 
        onClick={() => history.push('/addfriend')}>
        Add a Friend
      </Button>
      
      <div>
        <LogOutButton className="btn" />
      </div>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
