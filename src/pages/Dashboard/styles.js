import styled from 'styled-components';

export const BannersContainer = styled.section`
  width: 100%;
  display: flex;
  margin-bottom: 24px;
  position: relative;
`;

export const Slider = styled.div`
  position: absolute;
  bottom: 5%;
  left: 48%;
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
