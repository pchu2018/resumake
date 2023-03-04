import {DndContext, MouseSensor, useSensor, useSensors} from '@dnd-kit/core';
import {arrayMove, SortableContext} from '@dnd-kit/sortable';
import {useState} from 'react';

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

  function handleDragEnd(event: any) {
    const {active, over} = event;
    console.log('drag end!');
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
          <ResumeComponent key={id} id={id} content={`hi i am ${id}`} />
        ))}
      </SortableContext>
    </DndContext>
  );
}
