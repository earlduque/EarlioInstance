import { Color } from '../imports/Color';
export declare class Style {
    constructor();
    setBackgroundColor(color?: Color): void;
    setBaseDirection(direction?: string): void;
    setBold(): void;
    setBorder(width?: number, color?: Color): void;
    setBorderBottom(width?: number): void;
    setBorderLeft(width?: number): void;
    setBorderRight(width?: number): void;
    setBorderTop(width?: number): void;
    setColoredBorder(width?: number, color?: Color): void;
    setColoredBorderBottom(width?: number, color?: Color): void;
    setColoredBorderLeft(width?: number, color?: Color): void;
    setColoredBorderRight(width?: number, color?: Color): void;
    setColoredBorderTop(width?: number, color?: Color): void;
    setFontColor(color?: Color): void;
    setFontSize(fontSize?: number): void;
    setHorizontalAlignment(alignment?: string): void;
    setItalic(): void;
    setPadding(padding?: number): void;
    setPaddingBottom(padding?: number): void;
    setPaddingLeft(padding?: number): void;
    setPaddingRight(padding?: number): void;
    setPaddingTop(padding?: number): void;
    setTextAlignment(alignment?: string): void;
    setVerticalAlignment(alignment?: string): void;
}
