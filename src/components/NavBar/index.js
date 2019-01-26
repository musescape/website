import React, { Fragment } from 'react';
import { Link } from 'react-static';

import { Nav, NavUl, NavLi } from './style';

const NavBar = () => (
  <Fragment>
    <Nav>
      <NavUl>
        <NavLi>
          <Link to="#">Blog</Link>
        </NavLi>
        <NavLi style={{marginRight: 0}}>
          <Link to="#">Contact</Link>
        </NavLi>
      </NavUl>
    </Nav>
  </Fragment>
);

export default NavBar;
