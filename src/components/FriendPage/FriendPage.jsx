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

import './FriendPage.css';

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

    const eventsDisplay = () => {
        if (detailsReducer.event && detailsReducer.event.length == 0) {
            return (
                <h4 className='display_title'>{detailsReducer.name} doesn't have any upcoming events.</h4>
            )
        } else {
            return (
                <div>
                    <h4 className='display_title'>{detailsReducer.name}'s upcoming events are: </h4>
                    {detailsReducer.event && detailsReducer.event.map((event, i) => {      
                        return <div key={i}>
                                    <p className='info'>{event.name} on {event.date}
                                    <IconButton 
                                    variant="contained" 
                                    onClick={() => {
                                        history.push(`${params.id}/editevent/${event.event_id}`);
                                        }}
                                    >
                                    <EditRoundedIcon /> 
                                    </IconButton>
                                    </p>
                                </div>
                    })}
                </div>
            )
        }
    };
    
    const giftsDisplay = () => {
        if (detailsReducer.gifts && detailsReducer.gifts.length == 0) {
            return (
                <h4 className='display_title'>{detailsReducer.name} does not have any gift ideas.</h4>
            )
        } else {
            return (
                <div>
                <h4 className='display_title'>You think {detailsReducer.name} might like: </h4>
                {detailsReducer.gifts && detailsReducer.gifts.map((gift, i) => {
                        return <div key={i}>
                                    <p>{gift.idea}
                                    <IconButton 
                                    variant="contained" 
                                    onClick={() => {
                                            history.push(`${params.id}/editgift/${gift.gift_id}`);
                                            }}
                                    >
                                    <EditRoundedIcon />     
                                    </IconButton>
                                    </p>
                                </div>
                })}
                </div>
            )
        }
    };
    
    
    return (
    <div className="standard">
        <h2 className="friend_title">{detailsReducer.name}</h2>

        {eventsDisplay()}
        
        {/* <div>
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
        </div> */}

        <Box textAlign="center" textAlign="center" m={1} pt={2}>
            <Button
                variant="contained"
                type="button"
                onClick={() => {
                history.push(`${params.id}/addevent`);
            }}>
                Add event
            </Button>
        </Box>

        {giftsDisplay()}

        {/* <div>
            {detailsReducer.gifts && detailsReducer.gifts.map((gift, i) => {
                    return <div key={i}>
                                <h5>You think {detailsReducer.name} might like: </h5>
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
        </div> */}

        <Box textAlign="center" m={1} pt={2}>
            <Button
                variant="contained"
                type="button"
                onClick={() => {
                history.push(`${params.id}/addgift`);
            }}>
                Add gift
            </Button>
        </Box>

        <BottomNav />
    </div>
    );
}

// this allows us to use <App /> in index.js
export default FriendPage;