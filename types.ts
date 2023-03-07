export interface ResumeType {
  title: string,
  components: ComponentType[]
}

export interface ComponentType {
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

export interface UserData {
  userId: number,
  name: string,
  location: string,
  linkedin: string,
  email: string,
  job_title?: string,
  resumeId: number,
  components: ComponentType[]

}