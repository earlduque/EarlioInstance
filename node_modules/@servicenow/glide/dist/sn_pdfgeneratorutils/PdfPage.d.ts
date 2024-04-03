export declare class PdfPage {
    constructor(pageSize?: string, orientation?: string);
    getBottom(): number;
    getLeft(): number;
    getRight(): number;
    getTop(): number;
    getWidth(): number;
    rotate(): PdfPage;
}
