import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${({theme}) => theme.colors.white};
  width: 100%;
  max-width: 500px;
  padding: 40px 30px;
  border-radius: 25px;
  box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.4);
`;

export const Title = styled.h1`
color: ${({theme}) => theme.colors.darkGrey}
`;

export const StyledList = styled.ul`
list-style: node;
  margin: 0;
  padding: 0;
`;