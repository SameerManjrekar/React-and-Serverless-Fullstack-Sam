import React from 'react';
import { Link } from 'react-router-dom';

import {
  StyledNavbar,
  StyledNavBrand,
  StyledNavbaItems,
  StyledLink,
} from './../styled/Navbar';
import { Accent } from './../styled/Random';

export default function Navbar() {
  return (
    <StyledNavbar>
      <StyledNavBrand>
        <Link to='/'>
          Learn.Build.<Accent>Type.</Accent>
        </Link>
      </StyledNavBrand>
      <StyledNavbaItems>
        <li>
          <StyledLink to='/'>Home</StyledLink>
        </li>
        <li>
          <StyledLink to='/highScores'>HighScores</StyledLink>
        </li>
        <li>
          <StyledLink to='/login'>Login</StyledLink>
        </li>
      </StyledNavbaItems>
    </StyledNavbar>
  );
}
