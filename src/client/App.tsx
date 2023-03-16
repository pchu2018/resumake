import './styles/index.css';
import { useDispatch } from 'react-redux';
import { initializeStore } from './actions/actions';

import MasterEditorContainer from "./containers/masterEditorContainer";

export default function App() {
  const dispatch = useDispatch();
  // collect initial data from localstorage
  const userData = localStorage.getItem('userData');
  // parse and dispatch to store
  dispatch(initializeStore(JSON.parse(userData)));

  return (
    <div >
      <h1 className="m-4 text-center font-mono text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">resumake</h1>
      <MasterEditorContainer/>
    </div>
  )
}