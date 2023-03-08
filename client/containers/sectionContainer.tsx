import { useDispatch, useSelector } from 'react-redux';
import Section from '../components/Section';
import { SectionType } from '../../types';
import { RootState } from '../store';
import { updateProfile } from '../actions/actions';
import AddSectionButton from '../components/AddSectionButton';

export default function SectionContainer() {
  const dispatch = useDispatch();
  // all the components from the store
  const sections = useSelector((state:RootState) => state.initialState.sections);
  const profile = useSelector((state:RootState) => state.initialState.profile)

  // create array of components to render
  const resumeSections = sections.map((comp: SectionType) => {
    return <Section key={comp.databaseId} databaseId={comp.databaseId} header={comp.header} bullets={comp.bullets} />
  })

  return (
    <div>
      <div>Section Container</div>
      {profile.name}

      <br/><input onChange={(event) => dispatch(updateProfile({...profile, name: event.target.value}))} value={profile.name}></input>
      {resumeSections}
      <AddSectionButton/>
    </div>
  )
}
