# ReactiveIonic

This library is a collection of modules to make it easier to use NgRx and Ionic together. All the modules are simply wrappers for the same Ionic implementation under the hood.

View on [npm](https://www.npmjs.com/package/reactive-ionic).

## ReactiveLoadingSpinnerModule

TODO: allow standard loading spinner configurations to be passed as args.

Use this module to control whether the Ionic loading spinner shows or is hidden based on NgRx store values (declarative), rather than explicitly having to call `create` / `dismiss` (imperative).

### Setup

(1) Import `ReactiveLoadingSpinnerModule` into your app module, and pass your loading reducer to the `forRoot` method:

```
# app.module.ts
...
import { ReactiveLoadingSpinnerModule } from "reactive-ionic";
import { myLoadingReducer } from "./providers/loading/loading.reducer";

@NgModule({
  declarations: [
    ...
  ],
  imports: [
    ...
    ReactiveLoadingSpinnerModule.forRoot({ reducer: myLoadingReducer })
  ],
  providers: [
    ...
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

```

(2) Add the `ReactiveLoadingSpinnerComponent` to your app component template:

```
<!-- app.component.html -->
<ion-app>
  <ion-router-outlet></ion-router-outlet>
</ion-app>

<reactive-loading-spinner></reactive-loading-spinner>

```

(3) In your reducer, control the visibility, message and css class of the built-in Ionic loading spinner by setting the `isLoading`, `message` and `cssClass` store values.

```
...
import { LoadingState } from "reactive-ionic/lib/reactive-loading-spinner/state/loading.state";
import { StoreAction } from "../../state/store-action.interface";

const initialState: LoadingState = {
  isLoading: false,
  message: null,
  cssClass: null
};

export function loadingReducer(state: LoadingState = initialState, action: StoreAction): LoadingState {

  switch (action.type) {

    case MyActions.REQUEST:
      return {
        isLoading: true,
        message: "Request in progress",
        cssClass: "my-request-spinner"
      };

    case UserActions.REQUEST_SUCCESS:
    case UserActions.REQUEST_FAILURE:
      return {
        ...inititalState
      };

    default:
      return state;
  }
}

```
