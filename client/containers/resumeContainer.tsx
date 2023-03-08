import {DndContext, MouseSensor, useSensor, useSensors} from '@dnd-kit/core';
import {arrayMove, SortableContext, useSortable} from '@dnd-kit/sortable';
import {CSS} from '@dnd-kit/utilities';
import { useState, useEffect, useRef, useMemo} from 'react';
import { throttle } from '../utils';
import ResumeSection from '../components/ResumeSection';
import { useSelector } from 'react-redux';
import { RootState } from '../store';


export default function ResumeContainer() {
  const [items, setItems] = useState(['asda', 'xz', '3', '4']);
  const sensors = useSensors(
    useSensor(MouseSensor, {
      activationConstraint: {
        distance: 10,
      },
    }),
  );

  const isInitialMount = useRef(true);

  // access resume id by initial state -> current resume 
  const resume_id = useSelector((state:RootState) => state.initialState.currentResume)
  const user_id = useSelector((state:RootState) => state.initialState.userId)
  const grids = useSelector((state:RootState) => state.initialState.grids)

  // initializing items
  const gridIds = grids.map(x => x.gridId)
  useEffect(() => {
    setItems(gridIds)
  }, [])

  // throttle for update reumse
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
   } else {
       // Your useEffect code here to be run on update
       throttledFetch(items);
   }
  }, [items])

  // will change to fetch
  const callback = (items: string[]) => {
    console.log(items)

    // fetch to update the resume posting date
    const updateResumeTimestamp = {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        // query by resume id to update the timestamp
        resumeId: resume_id,
      }),
    };

    fetch(`/api/resume`, updateResumeTimestamp).then((response) => {
      if (response.status === 200) {
        console.log('update resume successfully')
      }
    });

    // fetch to update all the grids in the resume
    const updateGrid = {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        // query by resume id to update the timestamp
        resumeId: resume_id,
        grids: items,
      }),
    };

    fetch(`/api/grid`, updateGrid).then((response) => {
      if (response.status === 200) {
        console.log(`update grid successfully`)
      }
    });
  };

  // memo-ize throttled function
  const throttledFetch = useMemo(() => throttle(callback, 5000), [])

  
  function handleDragEnd(event: any) {
    const {active, over} = event;
    if (over && active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.indexOf(active.id);
        const newIndex = items.indexOf(over.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  }

  return (
    <DndContext sensors={sensors} onDragEnd={handleDragEnd}>
      <SortableContext items={items}>
        {items.map((id) => (
          <ResumeSection key={id} databaseId={id} header={'some header'} bullets={`hello i am ${id}`} />
        ))}
      </SortableContext>
    </DndContext>
  );
}
