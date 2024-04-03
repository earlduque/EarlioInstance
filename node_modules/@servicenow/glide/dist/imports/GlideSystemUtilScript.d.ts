export declare class GlideSystemUtilScript {
    static _getScriptError(script?: string, scopeId?: string): string;
    static _getScriptErrorForTable(script?: string, scopeId?: string, table?: string): string;
    static getScriptError(script?: string): string;
    static getScriptErrorFromScope(script?: string, scopeId?: string): string;
    static isESLatest(): boolean;
    static isValidScript(script?: string): boolean;
    static isValidScriptFromScope(script?: string, scopeId?: string): boolean;
    static loadBatchScript(fileName?: string): void;
    static scheduleScript(scriptName?: string, currentObj?: any, parmString?: any): void;
}
