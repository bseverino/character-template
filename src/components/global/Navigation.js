import React from 'react';
import { Link } from 'react-router-dom';

export const Navigation = () => {
    return (
        <div>
            <Link to='/'>About</Link>
            <Link to='/gallery'>Gallery</Link>
            <Link to='/ooc'>OOC</Link>
        </div>
    );
};