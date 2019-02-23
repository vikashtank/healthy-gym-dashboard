import React from 'react';
import {shallow} from 'enzyme';

import App from './App';

it('renders with enzyme without crashing', () => {
  let wrapper = shallow(<App />)
})
