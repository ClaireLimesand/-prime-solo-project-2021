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

    console.log('params', params)

    // const detailsReducer = useSelector(store => store.detailsReducer)
    const editEventReducer = useSelector(store => store.editEventReducer)

    useEffect(() => {
        dispatch({
            type: 'FETCH_EVENT',
            payload: params.id
        })
    }, [params.id]);

    console.log('params', params)

    // useEffect(() => {
    //     dispatch({
    //         type: 'FETCH_FRIEND_DETAILS',
    //         payload: params.id
    //     })
    // }, [params.id]);

    const handleNameChange = (event) => {
        dispatch({
            type: 'EDIT_EVENT_NAME',
            payload: event.target.value
        })
    };
    
    const handleDateChange = (event) => {
        console.log('HEY event', event)
        dispatch({
            type: 'EDIT_EVENT_DATE',
            payload: event.target.value
        })
    };

    const handleSaveButton = (event, index) => {
        event.preventDefault()
        console.log('details reducer', detailsReducer)
        detailsReducer.id = params.id
        detailsReducer.testIndex = index
        dispatch({
            type: 'EDIT_FRIEND_DETAILS',
            payload: detailsReducer
        })
    };

    return (
    <div>
            
        <ul>
            
                        <div>
                            <TextField 
                                value={editEventReducer.name || ""}
                                onChange={handleNameChange}
                                label="Event Name"
                                >
                                    {editEventReducer.name}
                            </TextField>
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <Stack spacing={2}>
                                <MobileDatePicker
                                    label="Event date"
                                    // inputFormat="MM/dd/yyyy"
                                    value={editEventReducer.date || null}
                                    onChange={handleDateChange}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                                </Stack>
                            </LocalizationProvider>
                        </div>
        </ul>
        
        {/* <h4>{detailsReducer.name}'s gifts:</h4>
        
        {detailsReducer.gifts && detailsReducer.gifts.map((gift) => {
            return (
                <div>
                    <TextField 
                        defaultValue={gift.name || ""}
                        onChange={handleGiftNameChange}
                        label="Gift Name"
                    >
                    </TextField>
                    <Button variant="contained" onClick={() => handleDeleteGift(gift.gift_id)}>Delete</Button>
                    <Button variant="contained">Edit</Button>
                </div>
            )})} */}

        <div>
            <Button 
                variant="contained" 
                onClick={(event) => handleSaveButton(event, index)}
            >
            Save
            </Button>
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