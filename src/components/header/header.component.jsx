import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { auth } from '../../firebase/firebase.utils';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartItem from '../cart-icon/cart-icon.component';
import CartDropDown from '../cart-dropdown/cart-dropdown.component';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selectors';

import { HeaderContainer, LogoContiner, OptionsContainer, OptionLink, OptionDiv } from './header.styles';

const Header = ({ currentUser, hidden }) => {
  return (
    <HeaderContainer>
      <LogoContiner to="/">
        <Logo className="logo" />
      </LogoContiner>
      <OptionsContainer>
        <OptionLink to="/shop" >SHOP</OptionLink>
        <OptionLink to="/contact">CONTACT</OptionLink>
        {
          currentUser ? <OptionDiv onClick={() => auth.signOut()}>SIGN OUT</OptionDiv> :
            <OptionLink to="/signin">SIGN IN</OptionLink>
        }
        <CartItem />
      </OptionsContainer>
      {hidden ? null : <CartDropDown />}
    </HeaderContainer>
  )
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
})

export default connect(mapStateToProps, null)(Header);