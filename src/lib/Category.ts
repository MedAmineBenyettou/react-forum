import { ITopic } from './Topic';

export interface ICategory {
 id: string;
 name: string;
 description: string;
 categories?: ICategory[];
 topics?: ITopic[];
}
