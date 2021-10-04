import React from 'react';
import {render, fireEvent, waitFor} from '@testing-library/react-native'

import ListTab from '../components/ListTab'

it("shows invalid inputs", async () =>{

    const {getByTestId,queryByText, getByText} = render(<ListTab/>);
    fireEvent.press(getByTestId("Button"))

    await waitFor(() => {
        getByText('invalid email format');
        getByText('invalid password format');
    })
    
    
});