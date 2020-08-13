import React from 'react';
import './header.css';

const HeaderIcons = ({ link, name }) => (
    <div className='nav'>
        <a href={link} className='link'>{name}</a>
    </div>
);

export default HeaderIcons;