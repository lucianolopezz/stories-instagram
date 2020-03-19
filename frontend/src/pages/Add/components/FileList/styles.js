import styled from 'styled-components';

export const Container = styled.ul`
  margin: 20px 0px 20px 0px;
  
  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #444;
    background-color: white;
    padding: 5px;
    
    & + li {
      margin-top: 15px;
    }
  }
`;

export const FileInfo = styled.div`
  display: flex;
  align-items: center;
  div {
    display: flex;
    flex-direction: column;
    strong {
      font-size: 14px;
      color: #333;
      margin-top: 5px;
    }
    a {
      font-size: 14px;
      color: red;      
      text-decoration: underline;
      cursor: pointer;
    }
  }
`;

export const Preview = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 5px;
  object-fit: cover;  
  margin-right: 10px;
`;