import { CategoryData } from '../../lib/Category';
import Forum from '../../lib/Forum';
import { TopicData } from '../../lib/Topic';
test('Initialises a Forum (No data & No options)', () => {
 const forum = new Forum();
 expect(forum.children.length).toBe(0);
});

test('Initialises a Forum (WITH data & No options)', () => {
 /**@type {TopicData} */
 const t = { type: 'TOPIC', title: 'Test', author: 'moi' },
  c = { type: 'CATEGORY', name: 'test' };

 const f = new Forum({
  children: [{ type: 'CATEGORY', name: 'test' }],
 });
 const f2 = new Forum({
  children: [t, t, t, t, t],
 });

 var cat = f.children[0];

 var top = f2.children[0];

 expect(f.children[0].id).toBeInstanceOf(String);
});
