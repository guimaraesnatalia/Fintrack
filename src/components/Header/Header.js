import './Header.css'
import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Logo from '../Logo/Logo'
import Button from '@mui/material/Button';
import MenuItem from '../MenuItem/MenuItem';
import Box from '@mui/material/Box';

function Header(){
    return(
        <>
        <AppBar component="nav">
        <Toolbar>
            <Logo />
            <MenuItem>Pagamentos</MenuItem>
            <MenuItem>Compras</MenuItem>
        </Toolbar>
      </AppBar>
      </>
    );
}

export default Header;