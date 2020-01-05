# ReactiveIonic

This library is a collection of modules to make it easier to use NgRx and Ionic together. All the modules are simply wrappers for the same Ionic implementation under the hood.

View on [npm](https://www.npmjs.com/package/reactive-ionic).

## LoadingModule

TODO: allow standard loading spinner configurations to be passed as args.

Use this module to control whether the Ionic loading spinner shows or is hidden based on NgRx store values (declarative), rather than explicitly having to call `create` / `dismiss` (imperative).

### Setup

(1) Import `ReactiveLoadingModule` into your app module, and pass your loading reducer to the `forRoot` method:

```
# app.module.ts
...
import { ReactiveLoadingModule } from "reactive-ionic";
import { myLoadingReducer } from "./providers/loading/loading.reducer";

@NgModule({
  declarations: [
    ...
  ],
  imports: [
    ...
    ReactiveLoadingModule.forRoot({ reducer: myLoadingReducer })
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
