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
    console.log('details events***', detailsReducer.event)
    
    // const eventDisplay = () => {
    //     if (detailsReducer.event === "") {
    //         return (
    //             <div>
    //                 <p>{detailsReducer.name} doesn't have any events</p>
    //             </div>
    //         )
    //     } else {
    //         return (
    //             {detailsReducer.event && detailsReducer.event.map((event) => {
    //                 return <p>{detailsReducer.name}'s {event.name} is on {event.date}</p>
    //         })}
    //         )
    //     }
    // }
    
    return (
    <div>
        <h3>{detailsReducer.name}</h3>
        
        <Box textAlign="center">
            <Button
                variant="contained"
                type="button"
                onClick={() => {
                history.push(`${params.id}/addevent`);
            }}
            >
                Add an event for {detailsReducer.name}
            </Button>
        </Box>

        <ul>
            {detailsReducer.event && detailsReducer.event.map((event) => {
                    return <p>{detailsReducer.name}'s {event.name} is on {event.date}</p>
            })}
        </ul>
        
        <Box textAlign="center">
            <Button
                variant="contained"
                type="button"
                onClick={() => {
                history.push(`${params.id}/addgift`);
            }}
            >
                Add a gift idea for {detailsReducer.name}
            </Button>
        </Box>
        
        <h5>You thought {detailsReducer.name} might like: </h5>
        <ul>
            {detailsReducer.gifts && detailsReducer.gifts.map((idea) => {
                return <p>{idea}</p>
            })}
        </ul>
        
        <Box textAlign="center">
            <Button
                variant="contained"
                type="button"
                onClick={() => {
                history.push(`${params.id}/edit`);
            }}
            >
                Edit This Friend
            </Button>
        </Box>

        <BottomNav />
    </div>
    );
}

// this allows us to use <App /> in index.js
export default FriendPage;