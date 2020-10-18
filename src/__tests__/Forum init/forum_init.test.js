import { CategoryData } from '../../lib/Category';
import Forum from '../../lib/Forum';

test('Initialises a Forum (No data & No options)', () => {
 const forum = new Forum();
 expect(forum.children.length).toBe(0);
});

test('Initialises a Forum (WITH data & No options)', () => {
 const f = new Forum({
  //   children: [{ type: 'TOPIC', title: 'test', author: 'test', isPinned: false }],
  children: [{ type: 'CATEGORY', name: 'test' }],
 });
 var test = f//  var test = f._children;
 .console
  .log(test);
 expect(f.children[0].id).toBeInstanceOf(String);
});
