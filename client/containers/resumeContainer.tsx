import {DndContext, MouseSensor, useSensor, useSensors} from '@dnd-kit/core';
import {arrayMove, SortableContext, useSortable} from '@dnd-kit/sortable';
import {CSS} from '@dnd-kit/utilities';
import {ReactNode, useState, useEffect, useRef, useMemo, useCallback} from 'react';
import { throttle } from '../utils';
import ResumeComponent from '../components/ResumeComponent';


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

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
   } else {
       // Your useEffect code here to be run on update
       throttledFetch(items);
   }
  }, [items])

  // will change to fetch
  const callback = (items: string[]) => console.log(items);

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
          <ResumeComponent key={id} id={id} content={`hello i am ${id}`} />
        ))}
      </SortableContext>
    </DndContext>
  );
}
