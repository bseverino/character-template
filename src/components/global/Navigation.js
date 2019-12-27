import React from 'react';
import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

const Navbar = styled.div`
    display: flex;
    justify-content: space-around;
`;

const Link = styled(RouterLink)`
    color: ${({ theme: { colors } }) => colors.primary.dark};

    &:hover {
        text-decoration: none;
        color: ${({ theme: { colors } }) => colors.primary.main};
    }
`;

export const Navigation = () => {
    return (
        <Navbar>
            <Link to='/'>About</Link>
            <Link to='/gallery'>Gallery</Link>
            <Link to='/ooc'>OOC</Link>
        </Navbar>
    );
};