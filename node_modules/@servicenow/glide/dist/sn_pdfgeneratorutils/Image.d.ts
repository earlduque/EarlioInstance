import { Color } from '../imports/Color';
export declare class Image {
    constructor(attachmentSysId?: string);
    static getBase64SignatureImage(signatureImageSysId?: string, width?: number, height?: number): number[];
    scaleAbsolute(width?: number, height?: number): void;
    scaleToFit(width?: number, height?: number): void;
    setAutoScale(value?: boolean): Image;
    setColoredBorder(color?: Color, width?: number): void;
    setHorizontalAlignment(alignment?: string): void;
    setNoBorder(): void;
}
