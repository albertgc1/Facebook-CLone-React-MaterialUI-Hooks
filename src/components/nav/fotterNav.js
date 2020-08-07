import React from 'react'
import { NavLink } from 'react-router-dom';

import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import PersonIcon from '@material-ui/icons/Person';
import SettingsIcon from '@material-ui/icons/Settings';

const a = {
    textDecoration: 'none',
    color: 'black'
}
const active = {
    borderBottom: '2px solid #3F51B5'
}

const FooterNav = () => {
    return (
        <div className='footer'>
            <NavLink style={a} to='/' exact activeStyle={active}>
                <div><HomeIcon /></div>
            </NavLink>
            <NavLink style={a} to='/search' activeStyle={active}>
                <div><SearchIcon /></div>
            </NavLink>
            <NavLink style={a} to='/profile' activeStyle={active}>
                <div><PersonIcon /></div>
            </NavLink>
            <NavLink style={a} to='/settings' activeStyle={active}>
                <div><SettingsIcon /></div>
            </NavLink>
        </div>
    )
}
 
export default FooterNav;
