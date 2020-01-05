import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { LoadingController } from "@ionic/angular";

@Component({
  // tslint:disable-next-line:component-selector
  selector: "app-loading-spinner",
  templateUrl: "./loading-spinner.component.html",
  styleUrls: ["./loading-spinner.component.scss"]
})
export class LoadingSpinnerComponent implements OnInit, OnDestroy {
  @Input() message = "Loading...";
  @Input() spinner:
    | "crescent"
    | "lines"
    | "lines-small"
    | "bubbles"
    | "circles"
    | "dots" = "crescent";
  @Input() cssClass: string;

  constructor(private loadingCtrl: LoadingController) {}

  public ngOnInit(): void {
    this.presentLoading();
  }

  private async presentLoading(): Promise<void> {
    const loadingElement = await this.loadingCtrl.create({
      message: this.message,
      spinner: this.spinner,
      cssClass: this.cssClass
    });
    return await loadingElement.present();
  }

  public ngOnDestroy(): void {
    this.loadingCtrl.dismiss();
  }
}
