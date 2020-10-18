import Topic, { TopicData } from './Topic';
import { v4 } from 'uuid';
import View, { ViewType } from './View';
// import { isCategoryDataArray, isTopicDataArray } from './Forum';
import { isCategoryOrTopicDataArray } from './Forum';

export interface viewOptions {
 isPinned?: boolean;
 position?: number;
}

export interface CategoryData /* <T> */ {
 name: string;
 type: ViewType;
 id?: string;
 parent?: Category;
 //  children?: Array<T>;
 children?: Array<CategoryData> | Array<TopicData>;
 options?: viewOptions;
}

export default class Category extends View {
 id: string;
 name: string;
 parent: Category | null;
 children: Array<Category> | Array<Topic>;
 options: viewOptions;
 constructor(data: CategoryData) {
  const { name, parent, children, options, id, type } = data;
  super(type);
  this.name = name;
  if (id === undefined) this.id = v4();
  else this.id = id;
  if (parent === undefined) this.parent = null;
  else this.parent = parent;
  if (children === undefined) this.children = [];
  else {
   this.children = [];
   if (isCategoryOrTopicDataArray(children)) {
    children.forEach((c) => {
     (this.children as Array<Category>).push(new Category(c));
    });
    // this.children = children.map((c) => new Category(c));
   } /* if (isTopicDataArray(children)) */ else {
    children.forEach((c) => {
     (this.children as Array<Topic>).push(new Topic(c));
    });
    // this.children = children.map((c) => new Topic(c));
   } /*  else {
    throw Error(
     'children array contains an unknown data type OR a mix between categories or topics'
    );
   } */
   //    if (isCategoryOrTopicDataArray(children)) {
   //     children.forEach((c) => {
   //      (this.children as Array<Category>).push(new Category(c));
   //     });
   //    } else {
   //     children.forEach((c) => {
   //      (this.children as Array<Topic>).push(new Topic(c));
   //     });
   //    }
  }
  if (options === undefined) this.options = { isPinned: false, position: 0 };
  else this.options = options;
 }

 addCategory(name: string) {}
}
