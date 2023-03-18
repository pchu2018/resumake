import { ProfileType } from "../../../types";

interface ProfileProps {
  info: ProfileType
}

export default function ProfileInformation( { info }: ProfileProps ) {
  return (
    <div>
      <h1>{info.name}</h1>
      <span>{info.location}</span><span>{info.linkedIn}</span>
    </div>
  )
}