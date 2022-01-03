import React, { useEffect } from 'react';
import { useState } from 'react';
import { useHistory } from "react-router";
import LogOutButton from '../LogOutButton/LogOutButton';
import {useDispatch, useSelector} from 'react-redux';
import useReduxStore from '../../hooks/useReduxStore';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import swal from 'sweetalert2';

function FriendForm() {

    const history = useHistory();
    const dispatch = useDispatch();

    const [friendName, setFriendName] = useState('');

    const handleSaveButton = () => {
        const newFriend = {
            name: friendName
        }
        console.log('new friend', newFriend);
        if (
            friendName === ''
        ) {
            // swal({
            //     title: "Hey wait,",
            //     text: "your friend needs a name!",
            // });
        } else {
            dispatch({
                type: 'ADD_FRIEND',
                payload: newFriend
            })
            history.push('/user');
        };  
    }

    return (
    <div>
        <p>Add your friend here:</p>
            <TextField 
                type="text"
                value={friendName}
                onChange={(event) => setFriendName(event.target.value)}
                required
            />
            <Button
                id="saveButton"
                onClick={handleSaveButton}
            >
                Add This Friend
            </Button>
    </div>
    );
}

// this allows us to use <App /> in index.js
export default FriendForm;