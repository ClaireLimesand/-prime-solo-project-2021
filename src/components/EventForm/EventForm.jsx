import React from 'react';
import { useState } from 'react';
import { useHistory } from "react-router";
import LogOutButton from '../LogOutButton/LogOutButton';
import {useDispatch, useSelector} from 'react-redux';
import useReduxStore from '../../hooks/useReduxStore';
import { useParams } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function EventForm() {

  const history = useHistory();
  const dispatch = useDispatch();
  const params = useParams();

  const [eventName, setEventName] = useState('');

  return (
    <div className="container">
      <p>Add Event Page</p>
      <TextField 
        type="text"
        label="event name"
        value={eventName}
        onChange={(event) => setEventName(event.target.value)}
        required
      />
      <Button
        id="saveButton"
        // onClick={handleSaveButton}
      >
      Add This Event
      </Button>
    </div>
  );
}

export default EventForm;
