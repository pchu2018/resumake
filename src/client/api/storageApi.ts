import { setStorageString, getStorageParse } from "../../utils";
import { UserData, ResumeType } from "../../../types";

export function updateGrid(items: string[]) {
  // retrieve current grids
  const {grids} = getStorageParse('current');


}

export function getInitialState(): UserData {
    // collect initial data from localstorage
    const profile = getStorageParse('profile');
    const currentGrids = getStorageParse('currentGrids');
    const resumes = getStorageParse('resumes');
    const sections = getStorageParse('sections');

    //pull latest resume to set as current
    const currentResume = resumes.sort((a: ResumeType, b: ResumeType) => a.lastModified > b.lastModified ? 1 : -1);

    return {
      profile,
      currentGrids,
      currentResume,
      resumes,
      sections
    }
}