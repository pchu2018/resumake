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