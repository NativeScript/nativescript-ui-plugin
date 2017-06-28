import { Observable } from 'tns-core-modules/data/observable';
import { View, Property } from "tns-core-modules/ui/core/view";
import { GridLayout } from 'tns-core-modules/ui/layouts/grid-layout';

let builder = require('tns-core-modules/ui/builder');

export const topTextProperty = new Property<Meme, string>({ name: "topText", defaultValue: undefined });
export const bottomTextProperty = new Property<Meme, string>({ name: "bottomText", defaultValue: undefined });
export const imageSourceProperty = new Property<Meme, string>({ name: "imageSource", defaultValue: undefined });

export class Meme extends GridLayout {
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