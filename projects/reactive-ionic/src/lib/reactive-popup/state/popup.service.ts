import { Injectable } from "@angular/core";
import { Action, ActionReducer, ReducerManager } from "@ngrx/store";
import { PopupState, popupStoreKey } from "./popup.state";

export class PopupServiceConfig {
  reducer: (state: PopupState, action: Action) => PopupState;
}

@Injectable({
  providedIn: "root"
})
export class PopupService {
  private reducer: ActionReducer<any, any>;

  constructor(
    private reducerManager: ReducerManager,
    config: PopupServiceConfig
  ) {
    this.reducer = config.reducer;
    this.overridePopupReducer(config.reducer);
  }

  public overridePopupReducer(reducer: ActionReducer<any, any>): void {
    this.reducerManager.addReducer(popupStoreKey, reducer);
  }
}
