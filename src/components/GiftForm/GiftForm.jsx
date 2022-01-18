import React from 'react';
import { useState } from 'react';
import { useHistory } from "react-router";
import LogOutButton from '../LogOutButton/LogOutButton';
import {useDispatch, useSelector} from 'react-redux';
import useReduxStore from '../../hooks/useReduxStore';
import { useParams } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Swal from 'sweetalert2';
import MuiButton from "@material-ui/core/Button";
import { styled } from "@material-ui/core/styles";
import { spacing } from "@material-ui/system";
import BottomNav from '../BottomNav/BottomNav';

function GiftForm() {

    const Button = styled(MuiButton)(spacing);
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
                icon: "warning"
            });
        } else {
            dispatch({
                type: 'ADD_GIFT',
                payload: newGift
            })
            Swal.fire({
                title: "Great idea!",
                text: "This gift has been added",
                icon: "success"
            });
            dispatch({
                type: 'FETCH_FRIEND_DETAILS',
                payload: params.id
            })
            history.push(`/friendpage/${params.id}`);
        };  
    }

    return (
        <div className="container">
            <h3>Add a gift:</h3>

                <TextField 
                    style = {{width: '100%'}}
                    type="text"
                    label="gift"
                    variant="outlined"
                    value={gift}
                    onChange={(event) => setGift(event.target.value)}
                    required
                />
                
                <Button
                    variant="contained"
                    id="saveButton"
                    onClick={handleSaveButton}>
                Add This Gift
                </Button>

                <Button
                    variant="contained"
                    id="saveButton"
                    onClick={() => history.push(`/friendpage/${params.id}`)}>
                Back
                </Button>

            < BottomNav />
        </div>
    );
}

export default GiftForm;
