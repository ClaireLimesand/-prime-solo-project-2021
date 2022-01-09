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
import Swal from 'sweetalert2';
import Stack from '@mui/material/Stack';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import TimePicker from '@mui/lab/TimePicker';
import DateTimePicker from '@mui/lab/DateTimePicker';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import MobileDatePicker from '@mui/lab/MobileDatePicker';
import { Link } from 'react-router-dom';
import BottomNav from '../BottomNav/BottomNav';
import MuiButton from "@material-ui/core/Button";
import { styled } from "@material-ui/core/styles";
import { spacing } from "@material-ui/system";

function EditPage() {

    const Button = styled(MuiButton)(spacing);
    const history = useHistory();
    const dispatch = useDispatch();
    const params = useParams();

    const detailsReducer = useSelector(store => store.detailsReducer)

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
        console.log('HEY!', id)
        dispatch({
            type: 'DELETE_GIFT',
            payload: id
        })
    }

    const handleDateChange = (e) => {
        console.log('Anything?', e.target.value)
    };

    const handleNameChange = (e) => {
        console.log('Anything?', e.target.value)
    };
    
    return (
    <div>
        <h4>{detailsReducer.name}'s events:</h4>
            
        <ul>
            {detailsReducer.event && detailsReducer.event.map((event) => {
                    return (
                        <div>
                            <TextField 
                                value={event.name}
                                onChange={(e) => handleNameChange(e.target.value)}
                                >
                                    {event.name}
                            </TextField>
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <Stack spacing={2}>
                                <MobileDatePicker
                                    label="Event date"
                                    inputFormat="MM/dd/yyyy"
                                    value={event.date}
                                    onChange={(e) => handleDateChange(e.target.value)}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                                </Stack>
                            </LocalizationProvider>
                            <Button variant="contained" onClick={() => handleDeleteEvent(event.event_id)}>Delete</Button>
                            <Button variant="contained">Edit</Button>
                        </div>
            )})}
        </ul>
        
        <h4>{detailsReducer.name}'s gifts:</h4>
        
        {detailsReducer.gifts && detailsReducer.gifts.map((gift) => {
            return (
                <div>
                    <p>{gift.idea}</p>
                    <Button variant="contained" onClick={() => handleDeleteGift(gift.gift_id)}>Delete</Button>
                    <Button variant="contained">Edit</Button>
                </div>
            )})}

        <div>
            <Button
                variant="contained"
                id="saveButton"
                onClick={() => history.push(`/friendpage/${params.id}`)}>
                    Back
            </Button>
        </div>

        < BottomNav />
    </div>
    );
}

// this allows us to use <App /> in index.js
export default EditPage;