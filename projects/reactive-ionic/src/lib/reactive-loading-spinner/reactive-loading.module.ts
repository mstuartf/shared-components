import { ModuleWithProviders, NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { defaultLoadingReducer } from "./state/loading.reducer";
import { CommonModule } from "@angular/common";
import { LoadingSpinnerComponent } from "./components/loading-spinner/loading-spinner.component";
import { LoadingSpinnerContainerComponent } from "./components/loading-spinner-container/loading-spinner-container.component";
import { LoadingServiceConfig } from "./state/loading.service";
import { loadingStateKey } from "./state/loading.state";

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(loadingStateKey, defaultLoadingReducer)
  ],
  declarations: [LoadingSpinnerComponent, LoadingSpinnerContainerComponent],
  exports: [LoadingSpinnerContainerComponent]
})
export class ReactiveLoadingModule {
  static forRoot(
    config: LoadingServiceConfig
  ): ModuleWithProviders<ReactiveLoadingModule> {
    return {
      ngModule: ReactiveLoadingModule,
      providers: [{ provide: LoadingServiceConfig, useValue: config }]
    };
  }
}
