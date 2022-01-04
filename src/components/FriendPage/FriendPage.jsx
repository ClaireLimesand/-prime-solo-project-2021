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

    const goToEventPage= (friend) => {
        history.push(`/addevent`);
    }
    

    return (
    <div>
        <h3>{detailsReducer.name}</h3>
        <Button
            type="button"
            onClick={() => {
            history.push('/addevent');
        }}
        >
            Add an event for {detailsReducer.name}
        </Button>
        <h5>{detailsReducer.name}'s events:</h5>
        {/* <ul>
            {detailsReducer.event && detailsReducer.event.map((event) => {
                {detailsReducer.date && detailsReducer.date.map((date) => {
                    return <li>{event} on {date}</li>
                })}
            })}
        </ul> */}
        <ul>
            {detailsReducer.event && detailsReducer.event.map((event) => {
                    return <li>{event}</li>
            })}
        </ul>
        <Button
            type="button"
            onClick={() => {
            history.push('/addgift');
        }}
        >
            Add a gift idea for {detailsReducer.name}
        </Button>
        <h5>You thought {detailsReducer.name} might like: </h5>
        <ul>
            {detailsReducer.ideas && detailsReducer.ideas.map((idea) => {
                return <li>{idea}</li>
            })}
        </ul>
    </div>
    );
}

// this allows us to use <App /> in index.js
export default FriendPage;