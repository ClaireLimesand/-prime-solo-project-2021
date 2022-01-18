import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';



function Nav() {
  const user = useSelector((store) => store.user);

  return (
    <div className="nav">
        <h1 className="nav-title">gifter.</h1>
    </div>
  );
}

export default Nav;
