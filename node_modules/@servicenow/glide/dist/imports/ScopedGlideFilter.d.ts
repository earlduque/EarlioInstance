import { GlideRecord } from '../imports/GlideRecord';
export declare class ScopedGlideFilter {
    static checkRecord(gr?: GlideRecord, filter?: string, match?: any): boolean;
    constructor(filter?: string, title?: string);
    match(gr?: GlideRecord, bMatchAll?: any): boolean;
    setCaseSensitive(caseSensitive?: boolean): void;
}
