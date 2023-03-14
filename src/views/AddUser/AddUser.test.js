import React from "react";
import { screen, fireEvent } from '@testing-library/react';
import {renderWithThemeProviders}  from 'helpers/renderWithThemeProviders'
import AddUser from "views/AddUser/AddUser";
import Dashboard from "views/Dashboard/Dashboard";


describe('Form field', () => {
    it('Renders the component', ()=> {
        renderWithThemeProviders(
            <>
                <AddUser/>
                <Dashboard/>
            </>

        );
        fireEvent.change(screen.getByTestId( 'Name'), {target: {value: 'Grażynka'}});
        fireEvent.change(screen.getByTestId( 'Attendance'), {target: {value: '55%'}});
        fireEvent.change(screen.getByTestId('Average'), {target: {value: '4.5'}});
        fireEvent.click(screen.getByText('Add'));
        screen.getByText('Grażynka');


    });
})
