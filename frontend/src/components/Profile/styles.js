import styled, { css } from 'styled-components';

const themeWhite = css`
  li a {
    color: white !important;
  }

  li a span.name {
    color: white !important;
  }
`;

const borderStorieImage = css`
  li a img {
    border: none !important;
  }
`;

export const Container = styled.ul`
  list-style: none;
  ${props => props.theme === 'white' && themeWhite};
  ${props => props.border === 'none' && borderStorieImage };


  li a {
    display: flex;
    flex-direction: row;
    align-items: center;
    text-decoration: none !important;
    text-transform: none;
    margin: 10px 0px;    

    :visited {
      color: none;
    }

    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      border: 2px solid red;
      object-fit: contain;
    }
    
    div.profile-content {
      margin-left: 20px;
      display: flex;
      flex-direction: column;
    }

    span.name {     
      color: ${props => props.color ? `${props.color} !important` : '#262626'};
    }

    span.hour {
      color: #999;
      font-size: 12px;
    }
  }

`;
