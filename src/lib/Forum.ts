import { Type } from 'typescript';
import Category, { CategoryData } from './Category';
import Topic, { TopicData } from './Topic';
import { Children } from './View';

type ForumChildrenData = TopicData[] | CategoryData[];

export function isCategoryOrTopicDataArray(
 view: ForumChildrenData
): view is CategoryData[] {
 return (
  view.length > 0 &&
  (view as CategoryData[]).every((c) => c.type === 'CATEGORY')
 );
}

export interface forumOptions {
 defaultTab: 'CATEGORIES' | 'LATEST' | 'TOP';
}

export interface forumData<T extends ForumChildrenData> {
 children?: T;
 options?: forumOptions; // TODO add more options
 theme?: string; // TODO Change
}

export default class Forum<T extends ForumChildrenData> {
 children: Children = [];
 options: forumOptions | null = null;
 theme: string | null = null;

 constructor(data?: forumData<T>) {
  if (data !== undefined) {
   this.children;
   const { children, options, theme } = data;
   if (children !== undefined && children.length > 0) {
    if (isCategoryOrTopicDataArray(children)) {
     this.children = children.map((c) => new Category(c));
     //  this.children.push(children.forEach((c) => new Category(c)));
    } else {
     this.children = (children as Topic[]).map((c) => new Topic(c));
    }
   }
   if (options !== undefined) this.options = options;
   if (theme !== undefined) this.theme = theme;
  }
 }

 //  isCategoryOnly(): Children {
 //   if (this.children[0] instanceof Category) return <Category[]>this.children;
 //   else return <Topic[]>this.children;
 //  }

 //  get _children() {
 //   if (this.children[0] instanceof Category) return <Category[]>this.children;
 //   else return <Topic[]>this.children;
 //   //   if (this.children[0] instanceof Category) return <Category[]>this.children;
 //   //   return <Topic[]>this.children;
 //  }

 public addCategory(data: CategoryData) {}
}
