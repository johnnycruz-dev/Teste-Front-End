import React from 'react';

import iconMail from '../../assets/icon-mail.svg';
import iconHeadset from '../../assets/icon-headset.svg';
import logoCorebiz from '../../assets/footer-logo.svg';
import logoVtex from '../../assets/footer-vtex.svg';

import {
  Container,
  Content,
  Localization,
  Contact,
  LogosFooter,
} from './styles';

function Footer() {
  return (
    <Container>
      <Content>
        <Localization>
          <h1>Localização</h1>
          <p>
            Avenida Andrômeda, 2000. Bloco 6 e 8
            <br />
            Alphavile SP
            <br />
            brasil@corebiz.ag
            <br />
            +55 11 3090 1039
          </p>
        </Localization>
        <Contact>
          <button type="button">
            <img src={iconMail} alt="E-mail" />
            <p>ENTRE EM CONTATO</p>
          </button>
          <button type="button">
            <img src={iconHeadset} alt="Headset" />
            <p>FALE COM O NOSSO CONSULTOR ONLINE</p>
          </button>
        </Contact>
        <LogosFooter>
          <div>
            <p>Created by</p>
            <img src={logoCorebiz} alt="Corebiz" />
          </div>
          <div>
            <p>Created by</p>
            <img src={logoVtex} alt="VTEX" />
          </div>
        </LogosFooter>
      </Content>
    </Container>
  );
}

export default Footer;
