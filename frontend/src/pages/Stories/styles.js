import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #262626;
  z-index: 2;
`;

export const Header = styled.div`
  display: flex;
  width: 100%;
  max-width: 400px;
  justify-content: space-between;
  align-items: center;
  
  a {
    color: white;
  }

  svg {
    font-size: 30px;
  }
`;
