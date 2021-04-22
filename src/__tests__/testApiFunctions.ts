import { IforumApiFunctions } from '../lib/Forum';

export const testApiFunctions: IforumApiFunctions = {
 loginUser: async (loginData: any) => {
  return await fetch('/login', {
   method: 'POST',
   headers: {
    'Content-Type': 'application/json',
   },
   body: JSON.stringify(loginData),
  }).then(async (r) => await r.json());
 },
 getAllCategories: async () => {
  return await fetch('/categories', {
   method: 'GET',
  }).then(async (r) => await r.json());
 },
};
