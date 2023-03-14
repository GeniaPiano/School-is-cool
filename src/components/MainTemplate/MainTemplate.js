import React from 'react';
import Navigation from "../organisms/Navigation/Navigation";
import {Wrapper} from 'components/MainTemplate/MainTemplate.styles'

const MainTemplate = (props) => {
    return(
        <Wrapper>
            <Navigation />
            {props.children}
        </Wrapper>
    )
}

export default MainTemplate;