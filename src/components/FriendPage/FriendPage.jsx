import React, { useEffect } from 'react';
import { useState } from 'react';
import { useHistory } from "react-router";
import LogOutButton from '../LogOutButton/LogOutButton';
import {useDispatch, useSelector} from 'react-redux';
import useReduxStore from '../../hooks/useReduxStore';
import { useParams } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import MuiButton from "@material-ui/core/Button";
import { styled } from "@material-ui/core/styles";
import { spacing } from "@material-ui/system";
import BottomNav from '../BottomNav/BottomNav';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import IconButton from '@mui/material/IconButton';

function FriendPage() {

    const Button = styled(MuiButton)(spacing);
    const history = useHistory();
    const dispatch = useDispatch();
    const params = useParams();

    const detailsReducer = useSelector(store => store.detailsReducer )

    useEffect(() => {
        dispatch({
            type: 'FETCH_FRIEND_DETAILS',
            payload: params.id
        })
    }, [params.id]);

    const displayEvents = () => {
        {detailsReducer.event && detailsReducer.event.map((event, i) => {      
            return <div key={i}>
                        <p>{detailsReducer.name}'s upcoming events are: </p>
                        <p>{event.name} on {event.date}</p>
                        <Button 
                        variant="contained" 
                        icon={<EditRoundedIcon />}
                        onClick={() => {
                            history.push(`${params.id}/editevent/${event.event_id}`);
                            }}
                        >
                            Edit
                        </Button>
                    </div>
        })}
    }

    return (
    <div>
        <h2>{detailsReducer.name}</h2>
        {/* {(detailsReducer.event.name === null) ?
        <p>hi!!!</p>
        :
        <p>hello!!</p>} */}
        <div>
        {detailsReducer.event && detailsReducer.event.map((event, i) => {      
            return <div key={i}>
                        <p>{detailsReducer.name}'s upcoming events are: </p>
                        <p>{event.name} on {event.date}</p>
                        <Button 
                        variant="contained" 
                        onClick={() => {
                            history.push(`${params.id}/editevent/${event.event_id}`);
                            }}
                        >
                            Edit
                        </Button>
                    </div>
        })}
        </div>
        <div>
            {/* <p>
            {detailsReducer.event.filter(event => event.event_id != null).map((event,i) => {
                return <div key={i}>
                            <p>{detailsReducer.name}'s upcoming events are: </p>
                            <p>{event.name} on {event.date}</p>
                            <Button variant="contained" onClick={() => {
                                history.push(`${params.id}/editevent/${event.event_id}`);
                                }}
                            >
                                Edit
                            </Button>
                        </div>
            })}
            </p> */}
        </div>


        <Box textAlign="center" textAlign="center" m={1} pt={2}>
            <Button
                variant="contained"
                type="button"
                onClick={() => {
                history.push(`${params.id}/addevent`);
            }}>
                Add an event for {detailsReducer.name}
            </Button>
        </Box>
        
        {/* <h5>You thought {detailsReducer.name} might like: </h5> */}

        <div>
            {detailsReducer.gifts && detailsReducer.gifts.map((gift, i) => {
                    return <div key={i}>
                                <h5>You thought {detailsReducer.name} might like: </h5>
                                <p>{gift.idea}</p>
                                <IconButton 
                                variant="contained" 
                                onClick={() => {
                                        history.push(`${params.id}/editgift/${gift.gift_id}`);
                                        }}
                                >
                                <EditRoundedIcon />     
                                </IconButton>
                            </div>
            })}
        </div>

        <Box textAlign="center" m={1} pt={2}>
            <Button
                variant="contained"
                type="button"
                onClick={() => {
                history.push(`${params.id}/addgift`);
            }}>
                Add a gift for {detailsReducer.name}
            </Button>
        </Box>

        <BottomNav />
    </div>
    );
}

// this allows us to use <App /> in index.js
export default FriendPage;