import { Observable } from 'tns-core-modules/data/observable';
import * as app from 'tns-core-modules/application';
import * as dialogs from 'tns-core-modules/ui/dialogs';
import { View, Property, backgroundInternalProperty, backgroundColorProperty } from "tns-core-modules/ui/core/view";
import { GridLayout } from 'tns-core-modules/ui/layouts/grid-layout';
import { Color } from "tns-core-modules/color/color";

let builder = require('tns-core-modules/ui/builder');

export const topTextProperty = new Property<SplashScreen, string>({ name: "topText", defaultValue: undefined });
export const bottomTextProperty = new Property<SplashScreen, string>({ name: "bottomText", defaultValue: undefined });
export const imageSourceProperty = new Property<SplashScreen, string>({ name: "imageSource", defaultValue: undefined });

export class SplashScreen extends GridLayout {
    public text: string;
    public overlayColor: Color;
    public imageSource: string;

    constructor() {
        super();

        let innerComponent = builder.load(__dirname + '/splash-screen.xml') as View;
        innerComponent.bindingContext = this;

        this.addChild(innerComponent);
    }
}

imageSourceProperty.register(SplashScreen);
topTextProperty.register(SplashScreen);
bottomTextProperty.register(SplashScreen);