import { IUserLoginData, IUserRegisterData } from './Auth';
import { ICategory } from './Category';
import { IUser } from './User';

type notDefined = undefined | null;

export interface IforumProps {
 apiFunctions: IforumApiFunctions;
}

export interface IforumApiFunctions {
 // TODO FIX
 getAllCategories?: () => Promise<ICategory[] | notDefined>;
 getCategory?: (id: string) => Promise<ICategory | notDefined>;

 getAllTopicsFrom_CategoryId?: (...args: any[]) => Promise<any[]>;
 getTopicFrom_CategoryId?: (...args: any[]) => Promise<any[]>;

 getAllPostsFrom_Topic?: (...args: any[]) => Promise<any[]>;
 getPostFrom_TopicId?: (...args: any[]) => Promise<any[]>;

 getUsers?: (...args: any[]) => Promise<any[]>;
 getUser?: (...args: any[]) => Promise<any[]>;

 modifyCategory?: (...args: any[]) => Promise<any[]>;
 modifyTopic?: (...args: any[]) => Promise<any[]>;
 modifyPost?: (...args: any[]) => Promise<any[]>;
 modifyUser?: (...args: any[]) => Promise<any[]>;

 deleteCategory?: (...args: any[]) => Promise<any[]>;
 deleteTopic?: (...args: any[]) => Promise<any[]>;
 deletePost?: (...args: any[]) => Promise<any[]>;
 deleteUser?: (...args: any[]) => Promise<any[]>;
 disableUser?: (...args: any[]) => Promise<any[]>;

 loginUser?: (loginData: IUserLoginData) => Promise<IUser>;
 logoutUser?: () => Promise<boolean>;

 registerUser?: (registerData: IUserRegisterData) => Promise<IUser>;
}
