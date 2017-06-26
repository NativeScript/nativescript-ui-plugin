import { Observable } from 'tns-core-modules/data/observable';
import { UiPlugin } from 'nativescript-ui-plugin';
import { SplashScreen1 } from 'nativescript-ui-plugin';

export class HelloWorldModel extends Observable {
  public message: string;
  private uiPlugin: UiPlugin;

  constructor() {
    super();

    this.uiPlugin = new UiPlugin();
    this.message = this.uiPlugin.message;
  }
}