import { Action } from "@ngrx/store";

export const OPEN_GALLERY = "[Gallery] Open Gallery";

export const CHANGE_BG = "[Gallery] Changing bg";


export class OpenGallery implements Action {
  readonly type = OPEN_GALLERY;

  constructor(public payload: number) {}
}
export class ChangeBg implements Action {
  readonly type = CHANGE_BG

  constructor(public payload: string){}
}



export type CategoryActions =  OpenGallery | ChangeBg