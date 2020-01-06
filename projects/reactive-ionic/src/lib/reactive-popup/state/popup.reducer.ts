import { PopupState } from "./popup.state";
import { Action } from "@ngrx/store";

const initialState: PopupState = null;

export function defaultPopupReducer(
  state: PopupState = initialState,
  action: Action
): PopupState {
  return state;
}
