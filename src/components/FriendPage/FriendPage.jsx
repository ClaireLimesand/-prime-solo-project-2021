import React, { useEffect } from 'react';
import { useState } from 'react';
import { useHistory } from "react-router";
import LogOutButton from '../LogOutButton/LogOutButton';
import {useDispatch, useSelector} from 'react-redux';
import useReduxStore from '../../hooks/useReduxStore';
import { useParams } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

function FriendPage() {

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
        <Button
            type="button"
            onClick={() => {
            history.push(`${params.id}/addevent`);
        }}
        >
            Add an event for {detailsReducer.name}
        </Button>
        {/* <h5>{detailsReducer.name}'s events:</h5> */}    
        <ul>
            {detailsReducer.event && detailsReducer.event.map((event) => {
                    return <p>{detailsReducer.name}'s {event.name} is on {event.date}</p>
            })}
        </ul>
        <Button
            type="button"
            onClick={() => {
            history.push(`${params.id}/addgift`);
        }}
        >
            Add a gift idea for {detailsReducer.name}
        </Button>
        <h5>You thought {detailsReducer.name} might like: </h5>
        <ul>
            {detailsReducer.gifts && detailsReducer.gifts.map((idea) => {
                return <li>{idea}</li>
            })}
        </ul>
    </div>
    );
}

// this allows us to use <App /> in index.js
export default FriendPage;