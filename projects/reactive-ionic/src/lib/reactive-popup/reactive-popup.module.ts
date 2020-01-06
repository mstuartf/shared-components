import { ModuleWithProviders, NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { defaultPopupReducer } from "./state/defaultPopupReducer";
import { CommonModule } from "@angular/common";
import { PopupContainerComponent } from "./components/popup-container/popup-container.component";
import { PopupComponent } from "./components/popup/popup.component";
import { popupStoreKey } from "./state/popup.state";
import { PopupServiceConfig } from "./state/popup.service";

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(popupStoreKey, defaultPopupReducer)
  ],
  declarations: [PopupContainerComponent, PopupComponent],
  exports: [PopupContainerComponent]
})
export class ReactivePopupModule {
  static forRoot(
    config: PopupServiceConfig
  ): ModuleWithProviders<ReactivePopupModule> {
    return {
      ngModule: ReactivePopupModule,
      providers: [{ provide: PopupServiceConfig, useValue: config }]
    };
  }
}
