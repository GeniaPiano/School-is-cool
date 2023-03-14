import React from 'react';
import { ReactComponent as DeleteIcon} from "assets/icons/delete-icon.svg";
import {StyledButton} from './DeleteButton.styles';

//React.createElement('button', {...props}, 'Click me' )

const DeleteButton = (props) => (
    <StyledButton {...props} >
        <DeleteIcon/>
    </StyledButton>
)

export default DeleteButton;