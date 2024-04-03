import { StringSet } from '../imports/StringSet';
export declare class IdentificationEngineScriptableApi {
    static compactIREMutexTable(): void;
    static compareIREStaticToDynamic(source?: string, json?: string, options?: Record<any, any>): string;
    static createOrUpdateCI(source?: string, json?: string): string;
    static createOrUpdateCIEnhanced(source?: string, json?: string, options?: Record<any, any>): string;
    static getIdentifierEntryInfo(sysId?: string): string;
    static getLookupRuleTablesForClass(className?: string): StringSet;
    static identifyCI(json?: string): string;
    static identifyCIEnhanced(source?: string, json?: string, options?: Record<any, any>): string;
    static runIdentificationAudit(gr?: any): void;
    static runIdentificationContext(contextId?: string, ieLevelString?: string, serviceCacheLevelString?: string): string;
    static validateExcludedFields(fields?: string, isIndependent?: boolean): Array<string>;
}
