import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #f2f2f2;
  padding: 24px 0px;

  h1 {
    font-size: 22px;
    line-height: 22px;
    font-weight: 700;
    color: #333;
    padding: 0px 12px;
  }
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 720px;
  margin-top: 16px;
  padding: 0px 16px;

  button {
    flex: 1;
    max-width: 140px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 48px;
    background-color: #000;
    border-radius: 5px;
    border: none;
    color: #fff;
    font-size: 14px;
    line-height: 14px;
    font-weight: 700;
    transition: opacity 0.2s;
    grid-area: button;
    margin-bottom: 22px;

    &:hover {
      opacity: 0.8;
    }
  }

  @media screen and (max-width: 700px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
    row-gap: 12px;
    grid-template-areas:
      'input input'
      'button button';

    button {
      width: 50%;
      margin: 0 auto;
    }
  }

  @media screen and (max-width: 620px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 240px;

    button {
      width: 100%;
      max-height: 48px;
      max-width: 620px;
    }
  }
`;

export const Input = styled.div`
  flex: 1;
  height: 70px;
  margin-right: 8px;

  input {
    width: 100%;
    margin-right: 8px;
    border-radius: 5px;
    background-color: #fff;
    height: 48px;
    border: 1px solid ${props => (props.errorInput ? '#D7182A' : '#FFF')};
    font-size: 12px;
    font-weight: 700;
    color: #585858;

    padding: 0px 16px;

    &:focus {
      border-color: #bdbdbd;
    }
  }

  p {
    color: #d7182a;
    font-size: 12px;
    font-weight: 400;
    margin-top: 8px;
  }

  @media screen and (max-width: 620px) {
    width: 100%;
    max-height: 70px;
  }
`;
