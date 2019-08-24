import React from 'react';
import { shallow } from 'enzyme';
import { App } from './App';
import { initialState } from './reducers/';
import { configure } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

it('App renders without crashing', () => {
    const mockFunction = jest.fn();

    const component = shallow(
        <App
            state={initialState}
            submitTodo={mockFunction}
        />,
    );

    expect(component.exists()).toEqual(true);
});
