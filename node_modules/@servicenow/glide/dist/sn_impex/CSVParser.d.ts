export declare class CSVParser {
    parseLineToArray(csv?: string, delimiter?: string, quoteCharacter?: string): Array<any>;
    parseLineToObject(csv?: string, headers?: Array<any>, delimiter?: string, quoteCharacter?: string): Record<any, any>;
    constructor();
}
