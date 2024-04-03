import { Iterator } from '../imports/Iterator';
export declare class ScopedCacheManager {
    static flushScopedCache(cacheName?: any, key?: any): void;
    static get(catalog?: any, key?: any): string;
    static getCacheEntryDetails(cacheName?: string, cacheKey?: string): string;
    static getScopedCacheKeys(name?: string): Iterator;
    static prefixFlush(cacheName?: any, prefix?: any): void;
    static put(catalog?: any, key?: any, value?: any): void;
    static putMultiRow(catalog?: any, key?: any, value?: any, ids?: any): void;
    static putRow(catalog?: any, key?: any, value?: any, sysId?: any, tableName?: any): void;
}
