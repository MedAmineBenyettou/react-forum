import React from 'react';
import Forum from '../../components/Forum';
import { mount } from 'enzyme';

it('Initialises the Forum: No api functions', () => {
 const wrap = mount(<Forum apiFunctions={{}} />, {});
});
