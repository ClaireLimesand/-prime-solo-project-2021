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
import { Link } from 'react-router-dom';
import BottomNav from '../BottomNav/BottomNav';
import MuiButton from "@material-ui/core/Button";
import { styled } from "@material-ui/core/styles";
import { spacing } from "@material-ui/system";

function EditGift() {

    const Button = styled(MuiButton)(spacing);
    const history = useHistory();
    const dispatch = useDispatch();
    const params = useParams();

    console.log('params', params)

    const editGiftReducer = useSelector(store => store.editGiftReducer)

    useEffect(() => {
        dispatch({
            type: 'FETCH_GIFT',
            payload: params.gift_id
        })
    }, [params.id]);

    const handleIdeaChange = (event) => {
        console.log(event.target.value)
        dispatch({
            type: 'EDIT_GIFT_IDEA',
            payload: event.target.value
        })
    };

    const handleSaveButton = (event) => {
        event.preventDefault()
        dispatch({
            type: 'EDIT_GIFT',
            payload: {
                id: params.gift_id,
                idea: editGiftReducer.idea
            }
        })
        Swal.fire({
            text: "This gift has been edited",
            icon: "success",
        });
        dispatch({
            type: 'FETCH_FRIEND_DETAILS',
            payload: params.friend_id
        })
        history.push(`/friendpage/${params.friend_id}`)
    };

    const handleDeleteGift = (id) => {
        dispatch({
            type: 'DELETE_GIFT',
            payload: id
        })
        Swal.fire({
            text: "This gift has been deleted",
            icon: "success",
        });
        dispatch({
            type: 'FETCH_FRIEND_DETAILS',
            payload: params.friend_id
        })
        history.push(`/friendpage/${params.friend_id}`)
    }

    return (
        <div className="container">
            <h3>Edit this gift:</h3>

            <div>
                <TextField 
                    style = {{width: '100%'}}
                    value={editGiftReducer.idea || ""}
                    onChange={handleIdeaChange}
                    label="Gift Name"
                >
                </TextField>
            </div>
            
            <div>
                <Button 
                    variant="contained" 
                    onClick={handleSaveButton}
                >
                Save
                </Button>
                    
                <Button 
                    variant="contained" 
                    onClick={() => handleDeleteGift(params.gift_id)}
                >
                    Delete
                </Button>
        </div>

        < BottomNav />
    </div>
    );
}

// this allows us to use <App /> in index.js
export default EditGift;