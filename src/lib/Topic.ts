import { IPost } from './Post';
import { IUser } from './User';

export interface ITopic {
 id: string;
 title: string;
 createdAt: Date;
 createdBy: IUser;
 lastModified: Date;
 posts?: IPost[];
}
