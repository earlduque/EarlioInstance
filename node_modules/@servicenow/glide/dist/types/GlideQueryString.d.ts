import { Query } from '../imports/Query';
export declare class GlideQueryString {
    constructor();
    constructor(query?: string);
    constructor(tableName?: string, query?: string);
    deserialize(): Query;
    getTerms(): Array<any>;
    init(query?: string): void;
    init(tableName?: string, query?: string): void;
    removeGroupBy(): string;
    serialize(q?: Query): string;
    setOmitInactive(b?: boolean): void;
    toXML(root?: Element): void;
}
