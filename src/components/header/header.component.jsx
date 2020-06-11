import React from 'react';
import './header.styles.scss';
import { Link } from 'react-router-dom';

import { auth } from '../../firebase/firebase.utils';
import { ReactComponent as Logo } from '../../assets/crown.svg';

const Header = ({ currentUser }) => {
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link to="/shop" className="option">SHOP</Link>
        <Link to="/contact" className="option">CONTACT</Link>
        {
          currentUser ? <div className="options" onClick={() => auth.signOut()}>SIGN OUT</div> :
            <Link to="/signin">SIGN IN</Link>
        }
      </div>
    </div>
  )
}

export default Header;