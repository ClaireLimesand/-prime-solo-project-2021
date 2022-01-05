import React from 'react';
import { useState } from 'react';
import { useHistory } from "react-router";
import LogOutButton from '../LogOutButton/LogOutButton';
import {useDispatch, useSelector} from 'react-redux';
import useReduxStore from '../../hooks/useReduxStore';
import { useParams } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Swal from 'sweetalert2';

function GiftForm() {

    const history = useHistory();
    const dispatch = useDispatch();
    const params = useParams();

    const [gift, setGift] = useState('');

    console.log('********GIFT', params.id)
    
    const handleSaveButton = () => {
        const newGift = {
            idea: gift,
            friend_id: params.id
        }
        console.log('new gift', newGift);
        if (
            gift === ''
        ) {
            Swal.fire({
                title: "Hey, wait!",
                text: "Please input a gift idea",
            });
        } else {
            dispatch({
                type: 'ADD_GIFT',
                payload: newGift
            })
            history.push(`/friendpage/${params.id}`);
        };  
    }

    return (
        <div className="container">
            <p>Add Gift Page</p>
            <TextField 
                type="text"
                label="gift"
                value={gift}
                onChange={(event) => setGift(event.target.value)}
                required
            />
            <Button
                id="saveButton"
                onClick={handleSaveButton}
            >
            Add This Gift
            </Button>
        </div>
    );
}

export default GiftForm;
