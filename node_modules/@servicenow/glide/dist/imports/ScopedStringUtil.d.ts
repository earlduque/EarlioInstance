export declare class ScopedStringUtil {
    static dotToUnderBar(source?: string): string;
    static escapeAllQuotes(source?: string): string;
    static escapeForHomePage(source?: string): string;
    static escapeHTML(source?: string): string;
    static escapeNonPrintable(source?: string): string;
    static escapeQueryTermSeparator(source?: string): string;
    static escapeTicks(source?: string): string;
    static getHTMLValue(source?: string): string;
    static getNumeric(source?: string): string;
    static isBase64(source?: string): boolean;
    static isEligibleSysID(id?: string): boolean;
    static newLinesToBreaks(value?: string): string;
    static normalizeWhitespace(pValue?: string): string;
    static unEscapeHTML(source?: string): string;
    static unescapeHTML(source?: string): string;
}
