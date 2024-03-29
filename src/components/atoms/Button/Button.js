import styled from 'styled-components';

export const Button = styled.button`
  padding: 7px 20px;
  margin: 15px 0;
  font-size: ${({theme}) => theme.fontSize.s};
  background-color: ${({theme}) => theme.colors.lightPurple};
  border-radius: 20px;
  border: none;
  font-weight: bold;
  color: ${({theme}) => theme.colors.darkGrey}
  
  
`;