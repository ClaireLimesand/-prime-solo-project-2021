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
import Stack from '@mui/material/Stack';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import TimePicker from '@mui/lab/TimePicker';
import DateTimePicker from '@mui/lab/DateTimePicker';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import MobileDatePicker from '@mui/lab/MobileDatePicker';

function EventForm() {

  const history = useHistory();
  const dispatch = useDispatch();
  const params = useParams();

  const [event, setEvent] = useState('');
  const [date, setDate] = React.useState(new Date('2022-01-01T12:00:00'));

  const handleChange = (newDate) => {
    setDate(newDate);
  };

  const handleSaveButton = () => {
    console.log('HEY DUMMY!', event)
    console.log('HEY DUMMY! 2', date)
    console.log('params :)', params.id)
    const newEvent = {
      event: event,
      date: date,
      friend_id: params.id
    }
    console.log('newEvent', newEvent)
    if (
      event === ''
    ) {
        Swal.fire({
            title: "Hey, wait!",
            text: "Please input an event name",
        });
      } else {
        console.log('yay!')
        dispatch({
            type: 'ADD_EVENT',
            payload: newEvent
        })
        history.push(`/friendpage/${params.id}`);
    }; 
  }

  return (
    <div className="container">
      <p>Add Event Page</p>
      <TextField 
        type="text"
        label="event name"
        value={event}
        onChange={(event) => setEvent(event.target.value)}
        required
      />
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Stack spacing={3}>
          <MobileDatePicker
            label="Date mobile"
            inputFormat="MM/dd/yyyy"
            value={date}
            onChange={handleChange}
            renderInput={(params) => <TextField {...params} />}
          />
        </Stack>
      </LocalizationProvider>
      <Button
          id="saveButton"
          onClick={handleSaveButton}
      >
      Add This Event
      </Button>
      
    </div>
  );
}

export default EventForm;
