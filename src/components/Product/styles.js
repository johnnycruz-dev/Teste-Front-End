import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  max-width: 1220px;
  margin: 0 auto 48px;
  padding: 0 12px;

  h1 {
    position: relative;
    width: max-content;
    height: max-content;
    padding: 5px;
    font-size: 20px;
    font-weight: 900;
    color: #000;
    margin-bottom: 24px;

    &::before {
      content: '';
      display: block;
      position: absolute;
      width: 50%;
      bottom: 0;
      border-bottom: 4.3px solid #c0c0c0;
    }
  }
`;

export const ProductContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  position: relative;

  @media screen and (max-width: 1250px) {
    grid-template-columns: repeat(2, 1fr);
    row-gap: 10px;
  }

  .hidden {
    display: none;
  }
`;

export const ArrowLeft = styled.img`
  cursor: pointer;
  margin: auto 0;

  @media screen and (max-width: 620px) {
    display: none;
  }
`;

export const ArrowRight = styled.img`
  cursor: pointer;
  margin: auto 0;

  @media screen and (max-width: 620px) {
    display: none;
  }
`;

export const WebCarousel = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 20px auto 20px;

  @media screen and (max-width: 620px) {
    display: none;
  }
`;

export const MobileCarousel = styled.div`
  display: none;
  width: 100%;

  @media screen and (max-width: 620px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const ProductItem = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;

  @media screen and (max-width: 1250px) {
    max-width: max-content;
    margin: 0 auto;
  }

  &:hover {
    cursor: pointer;

    > div {
      background-color: #e6e8ea;
    }

    button {
      background-color: #000;
      color: #fff;
    }
  }

  > img {
    width: 216px;
    height: 200px;
  }

  @media screen and (max-width: 620px) {
    > img {
      width: 132px;
      height: 122px;
    }
  }
`;

export const ProductInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 216px;

  h3 {
    padding-top: 12px;
    font-size: 12px;
    font-weight: 600;
    color: #7a7a7a;
  }

  h2 {
    font-size: 18px;
    font-weight: 700;
    line-height: 24px;
    color: #000;
  }

  p {
    margin-top: 3px;
    line-height: 15px;
    font-size: 11px;
    font-weight: 400;
    color: #7a7a7a;
  }

  button {
    background-color: #fff;
    border: none;
    padding: 6px 24px;
    color: #fff;
    font-size: 12px;
    font-weight: 600;
    border-radius: 5px;
    margin: 12px 0px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media screen and (max-width: 620px) {
    h3 {
      font-size: 10px;
    }

    h2 {
      font-size: 16px;
    }

    button {
      background-color: #000;
      color: #fff;
    }
  }
`;

export const StarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin: 6px 0px 18px;
`;

export const Star = styled.img``;

export const Flag = styled.span`
  position: absolute;
  top: 0;
  right: 0;

  img {
    width: 82px;
    height: 72px;
  }

  @media screen and (max-width: 620px) {
    right: 42px;

    img {
      width: 50px;
      height: 44px;
    }
  }
`;

export const Slider = styled.div`
  position: absolute;
  bottom: -15%;
  left: 46%;
  z-index: 10000000;
`;

export const SliderButton = styled.button`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${props => (props.active ? '#F8475F' : '#BDBDBD')};
  border: none;
  margin-right: 8px;
`;
