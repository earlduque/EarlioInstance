import { GlideTransformLog } from '../imports/GlideTransformLog';
export declare class GlideImportLog extends GlideTransformLog {
    constructor(arg1?: any, arg2?: any);
    error(message?: string): void;
    error(message?: string, source?: string): void;
    getImportRunHistory(): string;
    info(message?: string): void;
    info(message?: string, source?: string): void;
    setImportRunHistory(importRunHistory?: string): void;
    warn(message?: string): void;
    warn(message?: string, source?: string): void;
}
