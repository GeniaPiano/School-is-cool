import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/atoms/ Button/Button';
import {Wrapper, StyledDivInfo, StyledDivAverage} from './UserListItem.styles';


const UsersListItem = ({deleteUser, userData: {average, name, attendance = '0%'}}) => (
  <Wrapper>

    <StyledDivAverage value={average}>{average}</StyledDivAverage>
    <StyledDivInfo>
      <p>
          {name}
          <Button onClick={() => deleteUser(name)}/>
      </p>
      <p>attendance: {attendance}</p>
    </StyledDivInfo>
  </Wrapper>
 );

UsersListItem.propTypes = {
  userData: PropTypes.shape({
    average: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    attendance: PropTypes.string,
  })
}



export default UsersListItem;