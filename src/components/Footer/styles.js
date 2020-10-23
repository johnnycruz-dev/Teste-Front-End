import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background-color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1220px;
  margin: 26px auto;
  padding: 0 16px;

  @media screen and (max-width: 620px) {
    flex-direction: column;
  }
`;

export const Localization = styled.div`
  height: 170px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  @media screen and (max-width: 620px) {
    height: auto;
  }

  h1 {
    position: relative;
    width: max-content;
    height: max-content;
    padding-bottom: 16px;
    font-size: 20px;
    font-weight: 700;
    color: #fff;
    margin-bottom: 24px;

    &::before {
      content: '';
      display: block;
      position: absolute;
      width: 50%;
      bottom: 0;
      border-bottom: 5px solid #fff;
    }
  }

  p {
    font-size: 13px;
    font-weight: 400;
    line-height: 24px;
    color: #fff;
  }
`;

export const Contact = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 170px;
  margin-top: 30px;
  padding: 0 16px;

  @media screen and (max-width: 620px) {
    height: auto;
    width: 100%;
  }

  button {
    border: none;
    background-color: #fff;
    height: 38px;
    width: 100%;
    max-width: 195px;
    border-radius: 5px;
    padding: 5px 16px;
    margin-bottom: 25px;
    transition: opacity 0.2s;

    display: flex;
    align-items: center;
    justify-content: space-between;

    &:hover {
      opacity: 0.8;
    }

    p {
      font-size: 12px;
      font-weight: 600;
      color: #000;
      flex: 1;
    }
  }
`;

export const LogosFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 170px;
  margin-top: 30px;
  width: 100%;
  max-width: 160px;

  @media screen and (max-width: 620px) {
    height: auto;
    width: 100%;
  }

  div {
    height: 36px;

    p {
      font-size: 11px;
      font-weight: 400;
      color: #fff;
    }
  }
`;
