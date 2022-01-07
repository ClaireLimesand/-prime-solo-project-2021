import React, { useEffect } from 'react';
import { useState } from 'react';
import { useHistory } from "react-router";
import LogOutButton from '../LogOutButton/LogOutButton';
import {useDispatch, useSelector} from 'react-redux';
import useReduxStore from '../../hooks/useReduxStore';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Swal from 'sweetalert2';
import BottomNav from '../BottomNav/BottomNav';
import MuiButton from "@material-ui/core/Button";
import { styled } from "@material-ui/core/styles";
import { spacing } from "@material-ui/system";

function FriendForm() {

    const Button = styled(MuiButton)(spacing);
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
            Swal.fire({
                title: "Hey, wait!",
                text: "Your friend needs a name.",
            });
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
                label="Your Freind's Name"
                variant="standard"
                value={friendName}
                onChange={(event) => setFriendName(event.target.value)}
                required
            />
            <Button
                variant="contained"
                id="saveButton"
                onClick={handleSaveButton}
            >
                Add This Friend
            </Button>
    
    < BottomNav />
    </div>
    );
}

// this allows us to use <App /> in index.js
export default FriendForm;