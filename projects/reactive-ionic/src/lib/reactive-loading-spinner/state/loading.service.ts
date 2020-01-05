import { Injectable } from "@angular/core";
import { Action, ActionReducer, ReducerManager } from "@ngrx/store";
import { LoadingState, loadingStateKey } from "./loading.state";

export class LoadingServiceConfig {
  reducer: (state: LoadingState, action: Action) => LoadingState;
}

@Injectable({
  providedIn: "root"
})
export class LoadingService {
  private reducer: ActionReducer<any, any>;

  constructor(
    private reducerManager: ReducerManager,
    config: LoadingServiceConfig
  ) {
    this.reducer = config.reducer;
    this.overrideLoadingReducer(config.reducer);
  }

  public overrideLoadingReducer(reducer: ActionReducer<any, any>): void {
    this.reducerManager.addReducer(loadingStateKey, reducer);
  }
}
