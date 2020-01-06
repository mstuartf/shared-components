import { Action } from "@ngrx/store";

export interface PopupState {
  header: string;
  message: string;
  cssClass: string;
  buttons: {
    text: string;
    cssClass: string;
    action: Action;
  }[];
}

export const popupStoreKey = "__popup";
