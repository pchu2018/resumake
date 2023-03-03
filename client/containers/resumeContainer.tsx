import {DndContext, MouseSensor, useSensor, useSensors} from '@dnd-kit/core';
import {arrayMove, SortableContext, useSortable} from '@dnd-kit/sortable';
import {CSS} from '@dnd-kit/utilities';
import {ReactNode, useState} from 'react';

function SortableItem(props: {children?: ReactNode; id: string}) {
  const {listeners, setNodeRef, transform, transition} = useSortable({
    id: props.id,
  });

  const style = {
    padding: '5vmin',
    background: 'orange',
    border: '2px solid',
    transform: CSS.Transform.toString(transform),
    transition,
  } as React.CSSProperties;

  return (
    <div ref={setNodeRef} style={style} {...listeners}>
      {props.children}
    </div>
  );
}

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
          <SortableItem key={id} id={id}>
            <p>hello from {id}</p>
          </SortableItem>
        ))}
      </SortableContext>
    </DndContext>
  );
}
