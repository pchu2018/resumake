import { SectionType } from '../../types';

export default function ResumeSection({ databaseId, header, bullets }: SectionType) {

  return (
    <div >
      <p>{header}</p>
      {bullets}
    </div>
  )
}