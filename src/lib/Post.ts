import { IUser } from './User';

export interface IPost {
 id: string;
 postedBy: IUser;
 createdAt: Date;
 content: string;
}
