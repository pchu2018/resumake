// just for reference
import { createReducer } from '@reduxjs/toolkit';
import * as actions from '../actions/actions';
import { ResumeType, ComponentType, ProfileType } from '../../types';

interface initialStateType {
  currentResume: ResumeType | null,
  components: ComponentType[],
  profile: ProfileType
}

const initialState: initialStateType = {
  currentResume: null,
  components: [],
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
    .addCase(actions.createResume, (state, actions) => {
      state.currentResume = null;
    })
    .addCase(actions.updateResume, (state, action) => {
      state.currentResume = action.payload;
    })
});

export default resumeReducer;
