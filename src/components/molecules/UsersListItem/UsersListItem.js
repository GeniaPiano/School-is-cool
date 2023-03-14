import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import DeleteButton from 'components/atoms/DeleteButton/DeleteButton';
import {Wrapper, StyledDivInfo, StyledDivAverage} from './UserListItem.styles';
import {UsersContext} from "providers/UsersProvider";

const UsersListItem = ({userData: {average, name, attendance = '0%'}}) => {

    const {deleteUser} = useContext(UsersContext);

return (
    <Wrapper>
        <StyledDivAverage value={average}>{average}</StyledDivAverage>
        <StyledDivInfo>
            <p>
                {name}
                <DeleteButton onClick={() => deleteUser(name)}/>
            </p>
            <p>attendance: {attendance}</p>
        </StyledDivInfo>
    </Wrapper>
)
};

UsersListItem.propTypes = {
  userData: PropTypes.shape({
    average: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    attendance: PropTypes.string,
  })
}



export default UsersListItem;