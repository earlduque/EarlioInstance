import { Color } from '../imports/Color';
import { Document } from '../imports/Document';
export declare class Line {
    drawLine(document?: Document, pageNo?: number, xPos?: number, yPos?: number, width?: number, lineWidth?: number): void;
    setColor(color?: Color): void;
    constructor();
}
