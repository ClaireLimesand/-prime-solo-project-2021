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
import BottomNav from '../BottomNav/BottomNav';

function EditPage() {

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

    const handleDeleteEvent = (id) => {
        dispatch({
            type: 'DELETE_EVENT',
            payload: id
        })
    }

    const handleDeleteGift = (id) => {
        console.log('what now?', id)
    }
    
    return (
    <div>
        <h4>{detailsReducer.name}'s events:</h4>
            
        <ul>
            {detailsReducer.event && detailsReducer.event.map((event) => {
                    return (
                        <div>
                            <p>{detailsReducer.name}'s {event.name} is on {event.date}</p>
                            <Button variant="contained" onClick={() => handleDeleteEvent(event.event_id)}>Delete</Button>
                            <Button variant="contained">Edit</Button>
                        </div>
            )})}
        </ul>
        
        <h4>{detailsReducer.name}'s gifts:</h4>
        
        {detailsReducer.gifts && detailsReducer.gifts.map((idea) => {
            return (
                <div>
                    <p>{idea}</p>
                    <Button variant="contained">Delete</Button>
                    <Button variant="contained">Edit</Button>
                </div>
            )})}

        < BottomNav />
    </div>
    );
}

// this allows us to use <App /> in index.js
export default EditPage;