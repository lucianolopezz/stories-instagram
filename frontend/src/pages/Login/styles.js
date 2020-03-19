import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  width: 100%;
  max-width: 400px;

  div.logo {
    display: flex;
    justify-content: center;
    
    img {
      max-width: 100px;
      margin-bottom: 20px;
    }
  }

  .form-group {
    margin: 10px 0px;
  }
`;
