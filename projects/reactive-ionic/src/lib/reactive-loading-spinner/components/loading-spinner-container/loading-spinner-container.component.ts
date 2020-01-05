import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { LoadingState, loadingStateKey } from "../../state/loading.state";
import { LoadingService } from "../../state/loading.service";

@Component({
  // tslint:disable-next-line:component-selector
  selector: "reactive-loading-spinner",
  templateUrl: "./loading-spinner-container.component.html",
  styleUrls: ["./loading-spinner-container.component.scss"]
})
export class LoadingSpinnerContainerComponent implements OnInit {
  public loading$: Observable<LoadingState>;

  // loadingService needs to be injected into at least one component
  constructor(
    private store$: Store<any>,
    private loadingService: LoadingService
  ) {}

  public ngOnInit(): void {
    this.loading$ = this.store$.select<LoadingState>(loadingStateKey);
  }
}
