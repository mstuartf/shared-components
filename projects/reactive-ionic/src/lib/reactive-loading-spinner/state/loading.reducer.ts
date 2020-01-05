import { LoadingState } from "./loading.state";
import { Action } from "@ngrx/store";

const initialState: LoadingState = {
  isLoading: false,
  message: null,
  cssClass: null
};

export function defaultLoadingReducer(
  state: LoadingState = initialState,
  action: Action
): LoadingState {
  return state;
}
