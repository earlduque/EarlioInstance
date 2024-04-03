import { JSONObject } from '../imports/JSONObject';
export declare class PdfMergeSignRequestor {
    addSignatureMapping(pageNumber?: number, leftMargin?: number, topMargin?: number, boxWidth?: number, boxHeight?: number, signatureImgSysId?: string): void;
    createRequest(srcDocumentSysId?: string, targetTableName?: string, targetTableSysId?: string, targetFileName?: string): void;
    processRequest(): JSONObject;
    constructor();
}
