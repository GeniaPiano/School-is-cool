import React from 'react';
import {StyledLogo, StyledLink, Wrapper} from "./Navigation.styles";

const Navigation = () => {
    return (
        <Wrapper>
            <StyledLogo>
                <h1>
                    School
                    <br />
                    is cool
                </h1>
            </StyledLogo>
            <StyledLink exact to="/">Dashboard</StyledLink>
            <StyledLink to="/add-user">Add user</StyledLink>
            {/*<StyledLink activeClassName="active-link" to="/">Settings</StyledLink>*/}
            {/*<StyledLink activeClassName="active-link" to="/">Logout</StyledLink>*/}
        </Wrapper>
    );
};

export default Navigation;