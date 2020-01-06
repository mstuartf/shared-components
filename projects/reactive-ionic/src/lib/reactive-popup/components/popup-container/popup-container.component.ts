import { Component, OnInit } from "@angular/core";
import { PopupState, popupStoreKey } from "../../state/popup.state";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { PopupService } from "../../state/popup.service";

@Component({
  // tslint:disable-next-line:component-selector
  selector: "reactive-popup",
  templateUrl: "./popup-container.component.html",
  styleUrls: ["./popup-container.component.scss"]
})
export class PopupContainerComponent implements OnInit {
  public popup$: Observable<PopupState>;

  // popupService needs to be injected into at least one component
  constructor(private store$: Store<any>, private popupService: PopupService) {}

  public ngOnInit(): void {
    this.popup$ = this.store$.select<PopupState>(popupStoreKey);
  }
}
