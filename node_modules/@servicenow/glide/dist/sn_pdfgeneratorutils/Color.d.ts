export declare class Color {
    constructor(colors?: number[]);
    equals(color?: Color): boolean;
    static getGrayColor(grayScale?: number): Color;
    getOpacity(): number;
    getcolorValue(): number[];
    setColorValue(value?: number[]): void;
    setOpacity(opacity?: number): void;
}
