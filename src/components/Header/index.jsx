import React from 'react';
import PropTypes from 'prop-types';

import logoCorebiz from '../../assets/logo.svg';
import iconSearch from '../../assets/icon-search.svg';
import iconUser from '../../assets/icon-user.svg';
import iconCart from '../../assets/icon-cart.svg';
import iconMenu from '../../assets/icon-menu.svg';

import {
  Container,
  Menu,
  Logo,
  InputContainer,
  AccountContainer,
  Account,
  Cart,
} from './styles';

function Header({ cartCounter }) {
  return (
    <Container>
      <div>
        <Menu src={iconMenu} alt="Menu" hidden />
        <Logo src={logoCorebiz} alt="Corebiz" />
        <InputContainer>
          <input type="text" placeholder="O que está procurando?" />
          <button type="button">
            <img src={iconSearch} alt="Buscar" />
          </button>
        </InputContainer>

        <AccountContainer>
          <Account>
            <img src={iconUser} alt="Avatar" />
            <span>Minha Conta</span>
          </Account>
          <Cart>
            <img src={iconCart} alt="Carrinho" />
            <div>
              <span>{cartCounter}</span>
            </div>
          </Cart>
        </AccountContainer>
      </div>
    </Container>
  );
}

Header.propTypes = {
  cartCounter: PropTypes.number.isRequired,
};

export default Header;
