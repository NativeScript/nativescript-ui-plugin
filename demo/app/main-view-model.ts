import { Observable } from 'tns-core-modules/data/observable';
// import { UiPlugin } from 'nativescript-ui-plugin';
import { Meme } from 'nativescript-ui-plugin';

// import { SplashScreen1 } from 'nativescript-ui-plugin';

export class HelloWorldModel extends Observable {
  public message: string;
  // private uiPlugin: UiPlugin;

  constructor() {
    super();

    var meme = new Meme();
    // this.uiPlugin = new UiPlugin();
    // this.message = this.uiPlugin.message;
  }
}