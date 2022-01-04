import React, { useEffect } from 'react';
import { useState } from 'react';
import { useHistory } from "react-router";
import LogOutButton from '../LogOutButton/LogOutButton';
import {useDispatch, useSelector} from 'react-redux';
import useReduxStore from '../../hooks/useReduxStore';
import { useParams } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

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

    return (
    <div>
        <h3>{detailsReducer.name}</h3>
        <h5>{detailsReducer.name}'s events</h5>
        {/* <ul>
            {detailsReducer.event.map((event) => {
                return <li>{event}</li>
            })}
        </ul> */}
    </div>
    );
}

// this allows us to use <App /> in index.js
export default FriendPage;