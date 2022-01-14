import * as React from 'react';
import { useHistory } from "react-router";
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArchiveIcon from '@mui/icons-material/Archive';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import CalendarTodayRoundedIcon from '@mui/icons-material/CalendarTodayRounded';
import FavoriteRoundedIcon from '@mui/icons-material/Favorite';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';

import './BottomNav.css';

export default function FixedBottomNavigation() {

    const history = useHistory();
    const ref = React.useRef(null);

  return (
    <Box sx={{ pb: 7 }} ref={ref}>
      
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={4}>
        <BottomNavigation
          showLabels
        >
            <BottomNavigationAction onClick={() => {history.push(`/addfriend`);}} label="Add A Friend" icon={<AddCircleOutlineRoundedIcon />} />
            <BottomNavigationAction onClick={() => {history.push(`/user`);}} label="Friends" icon={<FavoriteRoundedIcon />} />
            <BottomNavigationAction onClick={() => {history.push(`/events`);}} label="Events" icon={<CalendarTodayRoundedIcon />} />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}


