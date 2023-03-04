// just for reference
import { createReducer } from '@reduxjs/toolkit';
import * as actions from '../actions/actions';
import { ResumeType, SectionType, ProfileType, initialStateType } from '../../types';

const initialState: initialStateType = {
  userId: '',
  currentResume: null,
  resumes: [],
  sections: [{databaseId: 'test', header: 'cool header', bullets: 'some nice bullets'}],
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
    .addCase(actions.createComponent, (state, action) => {
      state.sections = action.payload;
    })
});

export default resumeReducer;
