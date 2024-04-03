export declare class GlideSecurityUtils {
    static cleanURL(uri?: string): string;
    static enforceRelativeURL(uri?: string): string;
    static enforceRelativeUrlAndCleanJavascript(uri?: string): string;
    static enforceRelativeUrlAndCleanJavascriptLogoutRedirect(uri?: string): string;
    static escapeScript(script?: string): string;
    static isInFipsApprovedOnlyMode(): boolean;
    static isURLWhiteListed(uri?: string): boolean;
    static isURLWhiteListedStrict(uri?: string): boolean;
}
