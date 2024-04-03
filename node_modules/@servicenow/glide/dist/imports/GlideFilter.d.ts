import { GlideRecord } from '../imports/GlideRecord';
export declare class GlideFilter {
    static checkRecord(gr?: GlideRecord, filter?: string): boolean;
    static checkRecord(gr?: GlideRecord, filter?: string, match?: boolean): boolean;
    constructor(filter?: string, title?: string);
    getDisplayTitle(): string;
    getFilter(): string;
    getTitle(): string;
    match(gr?: GlideRecord, bMatchAll?: boolean): boolean;
    setCaseSensitive(caseSensitive?: boolean): void;
    setDisplayTitle(title?: string): void;
    setEnforceSecurity(enforceSecurity?: boolean): void;
}
