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

##ReactivePopupModule

Use this module to show, hide and set the contents of an Ionic popup based on NgRx store values (declarative), rather than explicitly having to call `create` and assigning callbacks (imperative).

### Setup

(1) Import `ReactivePopuprModule` into your app module, and pass your popup reducer to the `forRoot` method:

```
# app.module.ts
...
import { ReactivePopuprModule } from "reactive-ionic";
import { myPopupReducer } from "./providers/popup/popup.reducer";

@NgModule({
  declarations: [
    ...
  ],
  imports: [
    ...
    ReactivePopuprModule.forRoot({ reducer: myPopupReducer })
  ],
  providers: [
    ...
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

```

(2) Add the `ReactivePopupComponent` to your app component template:

```
<!-- app.component.html -->
<ion-app>
  <ion-router-outlet></ion-router-outlet>
</ion-app>

<reactive-popup></reactive-popup>

```

(3) In your reducer, control the visibility, contents and class of the built-in Ionic popup, and any buttons and the actions they should dispatch.

```
...
import { PopupState } from "reactive-ionic/lib/reactive-popup/state/popup.state";
import { StoreAction } from "../../state/store-action.interface";

const initialState: PopupState = null;

export function loadingReducer(state: PopupState = initialState, action: StoreAction): PopupState {

  switch (action.type) {

    case UserActions.INITIATE_SOME_FLOW:
      return {
        header: "Confirm",
        message: "Are you sure you want to do this?",
        cssClass: "my-popup",
        buttons: [
            {
                text: "Yes",
                cssClass: "my-popup-ok",
                action: new MyActions.MyPopupConfim()
            },
            {
                text: "No",
                cssClass: "my-popup-cancel",
                action: new MyActions.MyPopupCancl()
            }
        ]
      };

    default:
      return state;
  }
}

```
