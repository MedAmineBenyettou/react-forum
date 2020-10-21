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

export type forumData<T extends ForumChildrenData = ForumChildrenData> = {
 children?: T extends CategoryData[] ? CategoryData[] : TopicData[];
 options?: forumOptions; // TODO add more options
 theme?: string; // TODO Change
};
export type forumDataG = {
 options?: forumOptions; // TODO add more options
 theme?: string; // TODO Change
};
export type forumDataC = {
 children?: CategoryData[];
} & forumDataG;
export type forumDataT = {
 children?: TopicData[];
} & forumDataG;

type test = forumData['children'];

type diff = forumDataC | forumDataT extends forumDataC ? Category : Topic;

export default class Forum<T extends forumData = forumData> {
 //  children: Array<T extends forumData<CategoryData[]> ? Category : Topic> = [];
 children: Array<T extends forumData<CategoryData[]> ? Category : Topic> = [];
 options: forumOptions | null = null;
 theme: string | null = null;

 constructor(data?: T) {
  if (data !== undefined) {
   //    this.children;
   const { children, options, theme } = data;
   if (children !== undefined && children.length > 0) {
    if (isCategoryOrTopicDataArray(children)) {
     (this.children as Category[]) = children.map((c) => new Category(c));
     //    (this.children as Category[]).push(children.forEach((c) => new Category(c)));
    } else {
     //   this.children.push(children.forEach((c) => new Topic(c)));
     (this.children as Topic[]) = children.map((c) => new Topic(c));
    }
   }
   if (options !== undefined) this.options = options;
   if (theme !== undefined) this.theme = theme;
  }
 }

 //  setChildren<S extends ForumChildrenData>(data: forumData<S>):S extends CategoryData[]?Forum<Category[]>:Forum<Topic[]>{
 //     if(data.children){
 //         if(data.children[0].type==="CATEGORY"){
 //             return new Forum<Category>(data);
 //         }
 //     }
 //  }

 //  isCategoryOnly(): Children {
 //   if (this.children[0] instanceof Category) return <Category[]>this.children;
 //   else return <Topic[]>this.children;
 //  }

 //   get getChildren() {
 //    if (this.children[0] instanceof Category) return <Category[]>this.children;
 //    else return <Topic[]>this.children;
 //    //   if (this.children[0] instanceof Category) return <Category[]>this.children;
 //    //   return <Topic[]>this.children;
 //   }

 public addCategory(data: CategoryData) {}
}
