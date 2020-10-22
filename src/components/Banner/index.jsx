import React from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  BannerText,
  BannerBackground,
  BannerImages,
} from './styles';

function Banner({ bannerImage, text1, text2, showBanner }) {
  return (
    <>
      {showBanner && (
        <Container>
          <BannerBackground />
          <BannerText>
            <h3>{text1}</h3>
            <h1>{text2}</h1>
          </BannerText>
          <BannerImages bannerImage={bannerImage} />
        </Container>
      )}
    </>
  );
}

Banner.defaultProps = {
  text1: 'Olá, oque você está buscando?',
  text2: 'Criar ou migrar seu e-commerce?',
};

Banner.propTypes = {
  bannerImage: PropTypes.string.isRequired,
  text1: PropTypes.string,
  text2: PropTypes.string,
  showBanner: PropTypes.bool.isRequired,
};

export default Banner;
