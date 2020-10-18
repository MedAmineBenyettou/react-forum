import { v4 } from 'uuid';
import Category from './Category';
import Post from './Post';
import View, { ViewType } from './View';

export interface TopicData {
 type: ViewType;
 title: string;
 author: string;
 id?: string;
 parent?: Category | 0;
 isPinned?: boolean;
 posts?: Array<Post>;
}

export default class Topic extends View {
 id: string;
 title: string;
 parent: Category | 0;
 isPinned: boolean;
 author: string;
 posts: Array<Post>;
 /**
  *
  * @param data An object containing `title`, `parent`(The Category containing this topic),`isPinned`,`author`(The author's ID).
  */
 constructor(data: TopicData) {
  const { title, parent, isPinned, author, id, posts, type } = data;
  super(type);
  this.title = title;
  if (parent !== undefined) this.parent = parent;
  else this.parent = 0;
  this.author = author;
  if (isPinned === undefined) this.isPinned = false;
  else this.isPinned = isPinned;
  if (id === undefined) this.id = v4();
  else this.id = id;
  if (posts === undefined) this.posts = [];
  else this.posts = posts;
 }
}
