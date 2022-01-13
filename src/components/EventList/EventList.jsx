import React, { useEffect } from 'react';
import { useHistory } from "react-router";
import LogOutButton from '../LogOutButton/LogOutButton';
import {useDispatch, useSelector} from 'react-redux';
import useReduxStore from '../../hooks/useReduxStore';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Card } from '@mui/material';
import { CardHeader } from '@mui/material';
import { CardContent } from '@mui/material';
import { Divider } from '@mui/material';
import MuiButton from "@material-ui/core/Button";
import { styled } from "@material-ui/core/styles";
import { spacing } from "@material-ui/system";
import BottomNav from '../BottomNav/BottomNav';

function EventList() {

  const Button = styled(MuiButton)(spacing);
  const history = useHistory();
  const dispatch = useDispatch();
  const store = useReduxStore();

  const eventsReducer = useSelector((store) => store.eventsReducer);

  useEffect(() => {
    dispatch({ type: 'FETCH_EVENTS' });
  }, []);

  const goToFriend = (event) => {
    console.log('helloooo!', event.freind_id)
    history.push(`/friendpage/${event.freind_id}`);
} 

  return (
    <div className="container">
      {/* <h2>Welcome, {user.username}!</h2> */}
      
      <Grid container 
            spacing={2}
            direction="column"
            justifyContent="flex-start"
            alignItems="stretch">
      {
      store.eventsReducer.map((event, i) => (
        <Grid key={i} item xs={6}>
          <Card className={"eventCard"} onClick={()=>{goToFriend(event)}}>
            <CardContent className={"MuiCardContent-root"}>
              <Grid container justify="space-evenly">
                <label>{event.event_name} on {event.event_date}</label>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
          ))
        }
      </Grid>

      <Box textAlign="center"> 
        <LogOutButton className="btn" />
      </Box>

      <BottomNav />
    </div>
  );
}

// this allows us to use <App /> in index.js
export default EventList;