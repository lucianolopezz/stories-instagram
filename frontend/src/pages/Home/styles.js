import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Header = styled.div`
  width: 100%;
  max-width: 400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;

  a.logout {
    margin-left: 20px;
  }
`;

export const Body = styled.div`
  width: 100%;
  max-width: 400px;
  background-color: white;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #dbdbdb;
  max-height: 500px;
  overflow-y: auto;
  z-index: 1;

  div.loading {
    display: flex;
    justify-content: center;
  }

  div.header {
    display: flex;
    justify-content: space-between;
    color: #999;
    font-weight: 400;

    a {
      color: #262626;
      text-transform: none;
      text-decoration: none;
    }
  }
`;
