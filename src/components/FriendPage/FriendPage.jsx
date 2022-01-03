import React, { useEffect } from 'react';
import { useState } from 'react';
import { useHistory } from "react-router";
import LogOutButton from '../LogOutButton/LogOutButton';
import {useDispatch, useSelector} from 'react-redux';
import useReduxStore from '../../hooks/useReduxStore';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function FriendPage() {

    const history = useHistory();
    const dispatch = useDispatch();

    const friendDetails = useSelector(store => store.friendDetails )

    useEffect(() => {
        console.log('in useEffect FETCH_FRIENDS');
        dispatch({ type: 'FETCH_FRIENDS' });
    }, []);

    return (
    <div>
        <p>Howdy</p>
    </div>
    );
}

// this allows us to use <App /> in index.js
export default FriendPage;