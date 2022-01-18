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
import NavigateNextRoundedIcon from '@mui/icons-material/NavigateNextRounded';
import Typography from '@mui/material/Typography';

function EventList() {

    const Button = styled(MuiButton)(spacing);
    const history = useHistory();
    const dispatch = useDispatch();
    const store = useReduxStore();

    const eventsReducer = useSelector((store) => store.eventsReducer);

    useEffect(() => {
        dispatch({ type: 'FETCH_EVENTS' });
        dispatch({ type: 'FETCH_FRIENDS' });
    }, []);

    const goToFriend = (event) => {
        history.push(`/friendpage/${event.freind_id}`);
    } 

    return (
        <div className="container">
        <Box sx={{ fontSize: 16, textAlign: 'center'}}>
        
        <Grid container 
        spacing={2}
        direction="column"
        justifyContent="center"
        alignItems="stretch"
        >
        
        {
        store.eventsReducer.map((event, i) => (
            <Grid 
                key={i} 
                item xs={6}
                justify="center"
                alignItems="center"
                align="center"
            >
                <Card variant="outlined" text-align="center" onClick={()=>{goToFriend(event)}}>
                    <CardContent className={"MuiCardContent-root"}>
                        <Grid container 
                            justify="space-evenly"
                            alignItems="center"
                        >
                            <label>
                                {event.name}'s {event.event_name} on {event.event_date}
                            </label>
                            <NavigateNextRoundedIcon />
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

        </Box>
        </div>
    );
    }

export default EventList;