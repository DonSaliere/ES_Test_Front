import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => (
    <header className='nav-bar'>
        <NavLink to="/contacts">Контакты</NavLink>
        <NavLink to="/profile">Профиль</NavLink>
    </header>
);

export default NavBar;