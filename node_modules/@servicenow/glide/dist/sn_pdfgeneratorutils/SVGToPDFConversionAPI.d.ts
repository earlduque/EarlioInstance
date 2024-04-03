import { JSONObject } from '../imports/JSONObject';
export declare class SVGToPDFConversionAPI {
    addSVGToPDF(svg?: string, inputPdfSysId?: string, targetTable?: string, targetSysId?: string, nameForPdf?: string, pageNo?: number, x?: number, y?: number, svgImgWidth?: number, svgImgHeight?: number): JSONObject;
    convertSVGToPDF(svg?: string, nameForPDF?: string, targetTable?: string, targetSysId?: string): JSONObject;
    convertSVGToPDFWithSize(svg?: string, nameForPDF?: string, targetTable?: string, targetSysId?: string, svgImgWidth?: number, svgImgHeight?: number): JSONObject;
    constructor();
}
