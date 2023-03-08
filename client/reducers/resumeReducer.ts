// just for reference
import { createReducer } from '@reduxjs/toolkit';
import * as actions from '../actions/actions';
import { ResumeType, SectionType, ProfileType, initialStateType } from '../../types';

const initialState: initialStateType = {
  userId: '',
  currentResume: null,
  currentGrids: [
    {gridId: '1', resumeId: '1', componentId: 'test', y_coordinate: 0, x_coordinate: 7}, 
    {gridId: '2', resumeId: '1', componentId: 'test1', y_coordinate: 0, x_coordinate: 8},
    {gridId: '3', resumeId: '1', componentId: 'test2', y_coordinate: 0, x_coordinate: 9}
  ],
  resumes: [],
  sections: [
    {databaseId: 'test', header: 'cool header', bullets: 'some nice bullets'},
    {databaseId: 'test1', header: 'dope header', bullets: 'some fresh bullets'},
    {databaseId: 'test2', header: 'dope2 header', bullets: 'some fresh bullets'}
  ],
  profile: {
    name: 'Matt Severyn',
    location: 'North Carolina',
    email: 'matt.s@codesmith.io',
    jobTitle: 'Head Honcho',
    additional: '',
  }
};

const resumeReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(actions.initializeStore, (state, action) => {
      state = action.payload;
    })
    .addCase(actions.createResume, (state, action) => {
      state.currentResume = null;
    })
    .addCase(actions.updateResume, (state, action) => {
      state.currentResume = action.payload;
    })
    .addCase(actions.updateProfile, (state, action) => {
      state.profile = action.payload;
    })
    .addCase(actions.createSection, (state, action) => {
      state.sections = action.payload;
    })
    .addCase(actions.updateSection, (state, action) => {
      // find section in state and update
      for (let section of state.sections) {
        if(section.databaseId === action.payload.databaseId) section = action.payload;
        break;
      };
    })
});

export default resumeReducer;
