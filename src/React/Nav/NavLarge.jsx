import React from 'react';
import styled from 'styled-components';

import Nav from './Nav.jsx';

const NavLarge = () => {

    return (
        <NavLargeStyled className='NavLarge'>
            <Nav />
        </NavLargeStyled>
    );
}

export default NavLarge;

const NavLargeStyled = styled.div`

    display: flex;
    justify-content: center;
    background-color: #043838;
    padding: 20px;

.Nav {
    display: flex;
    width: 500px;
}

a {
    flex: 1;
    text-align: center;
    display: block;
    background: teal;
    color: white;
    text-decoration: none;

    border-radius: 5px;

    padding: 10px;
    margin: 0px 5px;

    &.active {
        background-color: orange;
    }
    &:hover {
        background-color: #19a1a1;
        color: #053636;
    }
}
`;