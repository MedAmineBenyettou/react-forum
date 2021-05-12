import { rest } from 'msw';

function findCategory(arr, id) {
 var cat = arr.find((c) => c.id.toString().match(id.toString()));
 if (!cat) {
  for (let c of arr) {
   var f = c.categories.find((c2) => c2.id.toString().match(id.toString()));
   if (f) cat = f;
   break;
  }
 }
 return cat;
}
/**@type import('../../lib/Category').ICategory[] */
const cats = [
 {
  id: 1,
  name: 'General',
  parentId: null,
  description: 'General stuff',
 },
 {
  id: 3,
  name: 'WoT',
  description: 'World of Tanks stuff',
  parentId: 1,
  categories: [],
 },
 {
  id: 4,
  name: 'WoWs',
  description: 'World of Warships stuff',
  parentId: 1,
  categories: [],
 },
 {
  id: 2,
  name: 'Replays',
  description: 'Post your replays here!',
  parentId: null,
 },
 {
  id: 5,
  name: 'Recruiting',
  description: 'Invite players here!',
  parentId: null,
 },
 {
  id: 6,
  name: 'New members',
  description: 'A place for new members',
  parentId: 5,
  categories: [],
 },
];

export const handlers = [
 rest.post('/register', (req, res, ctx) => {
  const { username, email, password, password2 } = req.body;
  if (!username | !email | !password | !password2)
   return res(
    ctx.status(400),
    ctx.json({
     error: {
      message: 'Missing parameters!',
     },
    })
   );
  return res(
   ctx.json({
    token: 'random token 123',
    user: {
     id: 'f79e82e8-c34a-4dc7-a49e-9fadc0979fda',
     username,
    },
   })
  );
 }),
 rest.post('/login', (req, res, ctx) => {
  const { username, password } = req.body;
  if (!username | !password)
   return res(
    ctx.status(400),
    ctx.json({
     error: {
      message: 'Missing parameters!',
     },
    })
   );
  return res(
   ctx.json({
    token: 'random token 123',
    user: {
     id: 'f79e82e8-c34a-4dc7-a49e-9fadc0979fda',
     username,
    },
   })
  );
 }),
 rest.get('/categories', (req, res, ctx) => {
  return res(ctx.json(cats));
 }),
 rest.get('/categories/:id', (req, res, ctx) => {
  const cat = findCategory(cats, req.params.id);
  if (cat) {
   return res(ctx.json(cat));
  } else {
   return res(
    ctx.status(400),
    ctx.json({
     error: {
      message: 'Category not found!',
     },
    })
   );
  }
 }),
];
