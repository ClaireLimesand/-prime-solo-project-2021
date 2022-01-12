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
    // console.log('details events***', detailsReducer.event)

    const handleDeleteEvent = (id) => {
        dispatch({
            type: 'DELETE_EVENT',
            payload: id
        })
    }

    const handleDeleteGift = (id) => {
        dispatch({
            type: 'DELETE_GIFT',
            payload: id
        })
    }

    // const displayEvents = () => {
    //     if (detailsReducer.event.length === 0) {
    //         return (
    //         <div>
    //             <p>{detailsReducer.name} does not have any upcoming events</p>
    //         </div>
    //         )
    //     } else {
    //         return  (
    //             <div>
    //             {detailsReducer.event && detailsReducer.event.map((event, i) => {      
    //                     return <div key={i}>
    //                                 <p>{detailsReducer.name}'s upcoming events are: </p>
    //                                 <p>{event.name} on {event.date}</p>
    //                                 <Button variant="contained" onClick={() => handleDeleteEvent(event.event_id)}>Delete</Button>
    //                                 <Button variant="contained" onClick={() => {
    //                                     history.push(`${event.event_id}/edit`);
    //                                     }}
    //                                 >
    //                                     Edit
    //                                 </Button>
    //                             </div>
    //             })}
    //             </div>
    //         )
    //     }
    // }

    return (
    <div>
        <h3>{detailsReducer.name}</h3>
        {/* {displayEvents()} */}

        <div>
            {detailsReducer.event && detailsReducer.event.map((event, i) => {      
                    return <div key={i}>
                                <p>{detailsReducer.name}'s upcoming events are: </p>
                                <p>{event.name} on {event.date}</p>
                                <Button variant="contained" onClick={() => handleDeleteEvent(event.event_id)}>Delete</Button>
                                <Button variant="contained" onClick={() => {
                                    history.push(`${params.id}/edit/${event.event_id}`);
                                    }}
                                >
                                    Edit
                                </Button>
                            </div>
            })}
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
                                <Button variant="contained" onClick={() => handleDeleteGift(gift.gift_id)}>Delete</Button>
                                <Button variant="contained" onClick={() => {
                                        history.push(`${params.id}/editgift/${gift.gift_id}`);
                                        }}
                                >
                                        Edit
                                </Button>
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
                Add a gift idea for {detailsReducer.name}
            </Button>
        </Box>

        <BottomNav />
    </div>
    );
}

// this allows us to use <App /> in index.js
export default FriendPage;