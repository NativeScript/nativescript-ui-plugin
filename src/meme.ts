import { Observable } from 'tns-core-modules/data/observable';
import * as app from 'tns-core-modules/application';
import * as dialogs from 'tns-core-modules/ui/dialogs';
import { View, Property, backgroundInternalProperty, backgroundColorProperty } from "tns-core-modules/ui/core/view";
import { GridLayout } from 'tns-core-modules/ui/layouts/grid-layout';
import { Color } from "tns-core-modules/color/color";

let builder = require('tns-core-modules/ui/builder');

export const topTextProperty = new Property<Meme, string>({ name: "topText", defaultValue: undefined });
export const bottomTextProperty = new Property<Meme, string>({ name: "bottomText", defaultValue: undefined });
export const imageSourceProperty = new Property<Meme, string>({ name: "imageSource", defaultValue: undefined });

export class Meme extends GridLayout {
    public text: string;
    public overlayColor: Color;
    public imageSource: string;

    constructor() {
        super();

        let innerComponent = builder.load(__dirname + '/meme.xml') as View;
        innerComponent.bindingContext = this;

        this.addChild(innerComponent);
    }
}

imageSourceProperty.register(Meme);
topTextProperty.register(Meme);
bottomTextProperty.register(Meme);