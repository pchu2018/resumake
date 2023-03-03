// import actionType constants
import { createAction } from '@reduxjs/toolkit';
import {ResumeType, ComponentType} from '../../types';

// actionTypes need 
export const createResume = createAction<undefined>('CREATE_RESUME');
export const updateResume = createAction<ResumeType>('UPDATE_RESUME');
export const deleteResume = createAction<string>('DELETE_RESUME');
export const loadResume = createAction<ResumeType>('LOAD_RESUME');

export const createComponent = createAction<undefined>('CREATE_COMPONENT');
export const updateComponent = createAction<ComponentType>('UPDATE_COMPONENT');
export const deleteComponent = createAction<string>('DELETE_COMPONENT');
// export const loadComponent = createAction<ComponentType>('LOAD_COMPONENT');
