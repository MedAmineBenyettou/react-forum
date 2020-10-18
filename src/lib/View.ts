import Category from './Category';
import Topic from './Topic';

export type ViewType = 'CATEGORY' | 'TOPIC';
export type Children = Topic[] | Category[];
export default class View {
 type: ViewType;
 constructor(type: ViewType) {
  this.type = type;
 }
}
