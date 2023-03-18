import './styles/index.css';
import { useDispatch } from 'react-redux';
import { initializeStore } from './actions/actions';
import { getStorageParse } from '../utils';
import { getInitialState } from './api/storageApi';

import MasterEditorContainer from "./containers/masterEditorContainer";

export default function App() {
  const dispatch = useDispatch();

  // get state and  and dispatch to store
  const initialState = getInitialState();
  dispatch(initializeStore(initialState));

  return (
    <div >
      <h1 className="m-4 text-center font-mono text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">resumake</h1>
      <MasterEditorContainer/>
    </div>
  )
}