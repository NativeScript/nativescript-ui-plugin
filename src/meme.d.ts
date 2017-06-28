import { Property } from "tns-core-modules/ui/core/view";
import { GridLayout } from 'tns-core-modules/ui/layouts/grid-layout';
import { Color } from "tns-core-modules/color/color";
export declare const topTextProperty: Property<Meme, string>;
export declare const bottomTextProperty: Property<Meme, string>;
export declare const imageSourceProperty: Property<Meme, string>;
export declare class Meme extends GridLayout {
    text: string;
    overlayColor: Color;
    imageSource: string;
    constructor();
}
