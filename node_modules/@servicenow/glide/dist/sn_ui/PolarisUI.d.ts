export declare class PolarisUI {
    static canUsePolarisCSS(): boolean;
    static canUsePolarisTemplates(): boolean;
    static getBodyClassNames(): string;
    static getPolarisClassicRoute(): string;
    static getPolarisContextPath(): string;
    static getPolarisLandingPath(): string;
    static getPolarisLandingPathURL(): string;
    static getPolarisRelativePath(): string;
    static getSassVariableMap(): Record<any, any>;
    static getThemeForUser(): Record<any, any>;
    static getThemeVariableCssCacheKey(): string;
    static isEnabled(): boolean;
    static isFollowEnabled(): boolean;
}
