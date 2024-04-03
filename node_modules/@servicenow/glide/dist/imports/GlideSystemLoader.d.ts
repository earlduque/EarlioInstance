export declare class GlideSystemLoader {
    static appLoad(dirName?: string): void;
    static appLoadData(dirName?: string): void;
    static appLoadDemo(dirName?: string): void;
    static appUpdate(dirName?: string): void;
    static appUpgrade(dirName?: string): void;
    static indexUpdate(dirName?: string): void;
    static isCleaningDemoData(): boolean;
    static load(fileName?: string): void;
    static loadFixes(o?: any): void;
    static loadResource(pluginName?: string, resourcePath?: string): void;
    static loadUpdates(o?: any): void;
    static setCleaningDemoData(cleaning?: boolean): void;
    static unload(tableName?: string, fileName?: string): void;
    static unloadAll(path?: string): void;
    static unloadChoices(tableName?: string, fieldName?: string, baseline?: string): void;
    static unloadRecordToXML(o?: any, indent?: boolean): string;
    static unloadWithQuery(tableName?: string, fileName?: string, query?: string): void;
    static updateSave(o?: any): void;
    static updateUnload(): void;
}
