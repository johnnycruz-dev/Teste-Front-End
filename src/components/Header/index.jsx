import React from 'react';

import logoImg from '../../assets/logo.png';
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

function Header() {
  return (
    <Container>
      <div>
        <Menu src={iconMenu} alt="Menu" hidden />
        <Logo src={logoImg} alt="Logo" />
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
              <span>1</span>
            </div>
          </Cart>
        </AccountContainer>
      </div>
    </Container>
  );
}

export default Header;
