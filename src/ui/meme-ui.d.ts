import { Property } from "tns-core-modules/ui/core/view";
import { GridLayout } from 'tns-core-modules/ui/layouts/grid-layout';
import { Color } from "tns-core-modules/color/color";
export declare const topTextProperty: Property<MemeUI, string>;
export declare const bottomTextProperty: Property<MemeUI, string>;
export declare const imageSourceProperty: Property<MemeUI, string>;
export declare class MemeUI extends GridLayout {
    text: string;
    overlayColor: Color;
    imageSource: string;
    constructor();
}
