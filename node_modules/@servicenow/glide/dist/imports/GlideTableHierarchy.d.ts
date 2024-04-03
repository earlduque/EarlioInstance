export declare class GlideTableHierarchy {
    constructor(tableName?: string);
    getAllExtensions(): Array<any>;
    getBase(): string;
    getHierarchy(): Array<any>;
    getName(): string;
    getRoot(): string;
    getTableExtensions(): Array<any>;
    getTables(): Array<any>;
    hasExtensions(): boolean;
    isBaseClass(): boolean;
    isSoloClass(): boolean;
}
