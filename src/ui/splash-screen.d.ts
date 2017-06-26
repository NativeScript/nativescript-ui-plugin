import { Property } from "tns-core-modules/ui/core/view";
import { GridLayout } from 'tns-core-modules/ui/layouts/grid-layout';
import { Color } from "tns-core-modules/color/color";
export declare const topTextProperty: Property<SplashScreen, string>;
export declare const bottomTextProperty: Property<SplashScreen, string>;
export declare const imageSourceProperty: Property<SplashScreen, string>;
export declare class SplashScreen extends GridLayout {
    text: string;
    overlayColor: Color;
    imageSource: string;
    constructor();
}
