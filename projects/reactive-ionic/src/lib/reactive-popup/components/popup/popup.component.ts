import { Component, Input, OnInit } from "@angular/core";
import { PopupState } from "../../state/popup.state";
import { AlertOptions } from "@ionic/core";
import { Store } from "@ngrx/store";
import { AlertController } from "@ionic/angular";

@Component({
  // tslint:disable-next-line:component-selector
  selector: "app-popup",
  templateUrl: "./popup.component.html",
  styleUrls: ["./popup.component.scss"]
})
export class PopupComponent implements OnInit {
  @Input() state: PopupState;

  constructor(
    private store$: Store<any>,
    private alertController: AlertController
  ) {}

  public ngOnInit(): void {
    this.presentAlert();
  }

  private async presentAlert(): Promise<void> {
    const config: AlertOptions = {
      header: this.state.header,
      message: this.state.message,
      cssClass: this.state.cssClass,
      buttons: this.state.buttons.map(btn => ({
        text: btn.text,
        cssClass: btn.cssClass,
        handler: () => this.store$.dispatch(btn.action)
      }))
    };

    const alert = await this.alertController.create(config);
    await alert.present();
  }
}
