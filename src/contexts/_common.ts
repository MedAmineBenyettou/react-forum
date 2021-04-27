import { IforumApiFunctions } from '../lib/Forum';
import { AlertDispatch, AlertType } from './Alert/AlertContext';
import {
 CategoriesDispatch,
 CategoriesState,
} from './Categories/CategoriesContext';
import { ForumDispatch } from './forum/ForumContext';

export interface IContextError {
 msg: string;
 id?: string;
}

export interface IUseForum {
 dispatch?: ForumDispatch;
 apiFunctions: IforumApiFunctions;
}

export interface IUseAlert {
 dispatchAlert: AlertDispatch;
 msg: string;
 alertType: AlertType;
}

export interface IUseCategories {
 dispatchCategories: CategoriesDispatch;
 categoriesState?: CategoriesState;
}
