import React from 'react';
import {ThemeProvider} from "styled-components";
import {GlobalStyle} from "assets/styles/GlobalStyle";
import {theme} from 'assets/styles/theme';
import {Wrapper} from "./Root.styles";
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {UsersProvider} from 'providers/UsersProvider'
import MainTemplate from "components/MainTemplate/MainTemplate";
import AddUser from "../AddUser/AddUser";
import Dashboard from "../Dashboard/Dashboard";

const Root = () => {
    return (
        <Router>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <MainTemplate>
                    <UsersProvider>
                    <Wrapper>
                            <Switch>
                                <Route path="/add-user">
                                    <AddUser />
                                </Route>
                                <Route path="/">
                                    <Dashboard />
                                </Route>
                            </Switch>
                        </Wrapper>
                    </UsersProvider>
                </MainTemplate>
            </ThemeProvider>
        </Router>
    );
}

export default Root;

//https://www.youtube.com/watch?v=mHMwR2n78NU&list=PLKnxnWdLGM48cEI7lnt8QFPpR6b-88K4-&index=9