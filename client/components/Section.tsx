import { SectionType } from '../../types';
import { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateSection } from '../actions/actions';

export default function ResumeSection({ databaseId, header, bullets }: SectionType) {
  const [headerContent, setHeaderContent] = useState(header);
  const [bulletContent, setBulletContent] = useState(bullets);

  const dispatch = useDispatch();
  const ref = useRef<HTMLDivElement>(null);
  const [ editing, setEditing ] = useState(false);

  // updates to section should be posted to store, then updated in db
  const handleChange = () => {
    // dispatch new Section object to store
    dispatch(updateSection({databaseId, header: headerContent, bullets: bulletContent}));
    // send post request to api
    fetch('/updateSection', {
      method: 'POST',
      body: JSON.stringify({
        databaseId, header: headerContent, bullets: bulletContent
      })
    }).then(() => console.log('section updated'))
  }

  // create listener for when click occurs outside of component
  const handleClickOutside = (event: Event) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      // update render
      setEditing(false);
      // trigger update logic
      handleChange();
    }
  };
  //attach listener to document
  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
        document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  const staticData = <div onClick={() => setEditing(true)}><p>{headerContent}</p>{bulletContent}</div>;
  const editable = <div ref={ref}><input placeholder={headerContent} onChange={event => setHeaderContent(event.target.value)}/>
                    <input placeholder={bulletContent} onChange={event => setBulletContent(event.target.value)}/></div>

  return (
    <div >
      {editing ? editable : staticData}
    </div>
  )
}