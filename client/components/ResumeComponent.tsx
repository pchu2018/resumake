import { ComponentType } from '../../types';
import { useSortable } from '@dnd-kit/sortable';
import {CSS} from '@dnd-kit/utilities';

interface fakeResumeComponentProps {
  id: string,
  content: string
}

export default function ResumeComponent({ id, content }: fakeResumeComponentProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({id});

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>{content}</div>
  )
}