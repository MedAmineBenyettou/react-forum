import React from 'react';
import Forum from '../../components/Forum';
import { mount } from 'enzyme';
import '@testing-library/jest-dom/extend-expect';

const { server } = require('../../msw/mocks/server');
server.listen();

/**@type import('../../lib/Forum').IforumApiFunctions */
const apiFunctions = {
 loginUser: async (loginData) => {
  const user = await fetch('/login', {
   method: 'POST',
   headers: {
    'Content-Type': 'application/json',
   },
   body: JSON.stringify(loginData),
  }).then(async (r) => await r.json());
  return user;
 },
 registerUser: '/login',
 getAllCategories: '/categories',
 getCategory: '/categories/:id',
};

test('Login user: No params', () => {
 const wrap = mount(<Forum apiFunctions={apiFunctions} />);
 const lbtn = wrap.find('.tab.col.s1.right');

 expect(lbtn.text()).toContain('Login');

 lbtn.simulate('click');

 expect(wrap.find('#LRscreen_id')).toHaveLength(1);

 const userInput = wrap.find('[name="username"]');
 expect(userInput).toHaveLength(1);

 const passwordInput = wrap.find('[name="password"]');
 expect(passwordInput).toHaveLength(1);

 //Submit:
 wrap.find('[type="submit"]').simulate('click');

 //It should stay in Login tab(Login failed!)
 expect(wrap.find('#LRscreen_id')).toHaveLength(1);
});

test('Login user: With params', () => {
 const wrap = mount(<Forum apiFunctions={apiFunctions} />);
 const lbtn = wrap.find('.tab.col.s1.right');

 expect(lbtn.text()).toContain('Login');

 lbtn.simulate('click');

 expect(wrap.find('#LRscreen_id')).toHaveLength(1);

 const form = wrap.find('form').first();
 form.simulate('submit', {
  preventDefault: () => {},
  target: [
   {
    value: {
     username: 'RandomNameIdontknow',
     password: '123456789',
    },
   },
  ],
 });

 //It should go back to ALL tab (Login success!)
 expect(wrap.find('.Categories')).toHaveLength(1);
});
