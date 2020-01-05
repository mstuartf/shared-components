export interface LoadingState {
  isLoading: boolean;
  message: string;
  cssClass: string;
}

export const loadingStateKey = "__loading";
