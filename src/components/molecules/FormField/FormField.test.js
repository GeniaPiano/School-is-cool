import React from "react";

import FormField from "./FormField";
import {renderWithThemeProviders} from "../../../helpers/renderWithThemeProviders";


describe('Form field', () => {
    it('Renders the component', ()=> {
        renderWithThemeProviders(<FormField label="name" name="name" id="name"/>)
    });
})




