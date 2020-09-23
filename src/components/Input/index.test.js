import React from 'react';
import { shallow } from 'enzyme';

import Input from '.';

describe('Input', () => {
    it('should match snapshot', () => {
        expect(shallow(<Input/>)).toMatchSnapshot();
    })
})