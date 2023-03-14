import styled from 'styled-components';



export const Wrapper = styled.li`
                display: flex;
align-items: center;
position: relative;
&:not(:last-child)::after {
  content:'';
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 2px;
  background-color: ${({theme}) => theme.colors.grey};
}
gap: 20px;
`;

export const StyledDivAverage = styled.div`
background-color: ${({theme}) => theme.colors.warning};
border-radius:50px;
height: 35px;
width: 35px;
display: flex;
justify-content: center;
align-items: center;
color: ${({theme}) => theme.colors.white};
font-size: ${({theme}) => theme.fontSize.s};
font-weight: bold;
background: ${({theme, value}) => {
  if (value > 4) return theme.colors.success;
  if(value > 3) return theme.colors.warning;
  if (value > 2) return theme.colors.error;
}};

`;

export const StyledDivInfo = styled.div`
   padding: 25px 20px;

p {
  margin: 0;
  color: ${({theme}) => theme.colors.darkGrey};
}

p:first-child{
  font-size: ${({theme}) => theme.fontSize.l};
  font-weight: 900;
  display: flex;
  align-content: center;
}

p:last-child {
  font-size: ${({theme}) => theme.fontSize.m};
}
`;