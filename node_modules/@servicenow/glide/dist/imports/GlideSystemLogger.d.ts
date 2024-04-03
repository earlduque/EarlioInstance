export declare class GlideSystemLogger {
    static debug(message?: string, parm1?: any, parm2?: any, parm3?: any, parm4?: any, parm5?: any): void;
    static disableSessionScopeDebug(scopeName?: string): void;
    static enableSessionScopeDebug(scopeName?: string): void;
    static error(message?: string, parm1?: any, parm2?: any, parm3?: any, parm4?: any, parm5?: any): void;
    static info(message?: string, parm1?: any, parm2?: any, parm3?: any, parm4?: any, parm5?: any): void;
    static isDebugging(): boolean;
    static isSessionScopeDebugging(scopeName?: string): boolean;
    static warn(message?: string, parm1?: any, parm2?: any, parm3?: any, parm4?: any, parm5?: any): void;
}
