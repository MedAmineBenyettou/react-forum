import { rest } from 'msw';

/**@type import('../../lib/Category').ICategory[] */
const cats = [
 {
  id: 1,
  name: 'General',
  description: 'General stuff',
  categories: [
   {
    id: 3,
    name: 'WoT',
    description: 'World of Tanks stuff',
   },
   {
    id: 4,
    name: 'WoWs',
    description: 'World of Warships stuff',
   },
  ],
 },
 {
  id: 2,
  name: 'Replays',
  description: 'Post your replays here!',
 },
 {
  id: 5,
  name: 'Recruiting',
  description: 'Invite players here!',
  categories: [
   { id: 6, name: 'New members', description: 'A place for new members' },
  ],
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
    id: 'f79e82e8-c34a-4dc7-a49e-9fadc0979fda',
    username,
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
    id: 'f79e82e8-c34a-4dc7-a49e-9fadc0979fda',
    username,
   })
  );
 }),
 rest.get('/categories', (req, res, ctx) => {
  return res(ctx.json(cats));
 }),
 rest.get('/categories/:id', (req, res, ctx) => {
  const cat = cats.find((c) => c.id === req.params.id);
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
