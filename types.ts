export interface ResumeType {
  title: string,
  lastModified: Date,
  sections: string[] //list of component database id for that resume
}

// export interface databaseIdType {
//   databaseId: string,
// } 

export interface SectionType {
  databaseId: string,
  header: string,
  bullets: string
}

export interface ProfileType {
  name: string,
  location: string,
  email: string,
  jobTitle: string,
  additional: string,
}

export interface initialStateType {
  userId: string,
  currentResume: ResumeType | null,
  resumes: ResumeType[] | null,
  sections: SectionType[],
  profile: ProfileType
}