import { IforumApiFunctions } from '../lib/Forum';
import { AlertDispatch, AlertType } from './Alert/AlertContext';
import { ForumDispatch } from './forum/ForumContext';

export interface IUseForum {
 dispatch: ForumDispatch;
 apiFunctions: IforumApiFunctions;
}

export interface IUseAlert {
 dispatchAlert: AlertDispatch;
 msg: string;
 alertType: AlertType;
}
