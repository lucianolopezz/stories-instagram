import styled, { css } from 'styled-components';

const dragActive = css`
  border-color: #78e5d5;
`;
const dragReject = css`
  border-color: #e57878;
`;

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
  align-items: center;

  span {
    margin-left: 20px;
  }

  svg {
    color: black;
  }
`;

export const Form = styled.form`
  width: 100%;
  max-width: 400px;
`;

export const DropContainer = styled.div`
  background-color: white;
  border: 1px dashed #ddd;
  border-radius: 5px;
  cursor: pointer;
  transition: height 0.2s ease;
  padding: 20px;
  margin-bottom: 10px;
  color: #333;
  ${props => props.isDragActive && dragActive}
  ${props => props.isDragReject && dragReject}
`;
