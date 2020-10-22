import styled from 'styled-components';

import backgroundBanner from '../../assets/background-banner.png';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 430px;

  @media screen and (max-width: 620px) {
    margin-top: 50px;
    height: 200px;
  }
`;

export const BannerText = styled.div`
  width: 100%;
  max-width: 1220px;
  margin: 0 auto;
  padding: 0 24px;
  position: absolute;
  z-index: 1000000;

  h3 {
    font-size: 30px;
    font-weight: 600;
    color: #fff;
    max-width: 40%;
  }

  h1 {
    font-size: 45px;
    font-weight: 700;
    color: #fff;
    max-width: 38%;
  }

  @media screen and (max-width: 1050px) {
    h3 {
      font-size: 25px;
    }

    h1 {
      font-size: 35px;
    }
  }

  @media screen and (max-width: 930px) {
    h3 {
      font-size: 20px;
    }

    h1 {
      font-size: 30px;
    }
  }

  @media screen and (max-width: 740px) {
    h3 {
      font-size: 15px;
    }

    h1 {
      font-size: 25px;
    }
  }

  @media screen and (max-width: 620px) {
    h3 {
      font-size: 20px;
      max-width: 100%;
    }

    h1 {
      font-size: 30px;
      max-width: 100%;
    }
  }
`;

export const BannerImages = styled.div`
  background: url(${props => props.bannerImage}) no-repeat;
  background-position: left center;
  background-size: cover;
  width: 75%;
  height: 100%;
  position: absolute;
  right: 0;
  top: 0;

  @media screen and (max-width: 620px) {
    width: 100%;
  }
`;

export const BannerBackground = styled.div`
  background: url(${backgroundBanner}) no-repeat;
  background-position: right center;
  width: 50%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  background-size: cover;
  position: absolute;
  z-index: 10000;
  left: 0;
  top: 0;

  @media screen and (max-width: 620px) {
    display: none;
  }
`;
