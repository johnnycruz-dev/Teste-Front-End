import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;

  > div {
    width: 100%;
    max-width: 1220px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 18px 12px;
  }

  @media screen and (max-width: 620px) {
    > div {
      padding: 18px 10px;
    }
  }
`;

export const Logo = styled.img`
  padding-right: 12px;

  @media screen and (max-width: 620px) {
    height: 25px;
    padding: 0px;
  }
`;

export const Menu = styled.img`
  @media screen and (max-width: 620px) {
    display: flex;
  }
`;

export const InputContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 710px;

  @media screen and (max-width: 620px) {
    position: absolute;
    top: 65px;
    right: 0px;
    z-index: 10000;
    padding: 0px 12px;
  }

  input {
    width: 100%;
    border: none;
    padding: 6px 0px;
    border-bottom: 1px solid #7a7a7a;
  }

  button {
    position: absolute;
    right: 16px;
    top: 5px;
    background: transparent;
    border: none;
    outline: none;

    &:hover {
      opacity: 0.6;
    }
  }
`;

export const AccountContainer = styled.div`
  width: 100%;
  max-width: 180px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 12px;

  @media screen and (max-width: 620px) {
    max-width: fit-content;
    padding: 0px;
  }
`;

export const Account = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 620px) {
    display: none;
  }

  img {
    margin-right: 6px;
  }

  span {
    color: #7a7a7a;
    font-size: 13px;
    font-weight: 400;
  }
`;

export const Cart = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    margin-right: 6px;
  }

  div {
    background-color: #f8475f;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 18px;
    height: 18px;

    span {
      color: #fff;
      font-weight: 700;
      font-size: 10px;
    }
  }
`;
