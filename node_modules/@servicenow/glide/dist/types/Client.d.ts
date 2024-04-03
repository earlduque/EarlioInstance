import { NativeObject } from '../imports/NativeObject';
import { NativeArray } from '../imports/NativeArray';
import { GlideRecord } from '../imports/GlideRecord';
import { GlideDateTime } from '../imports/GlideDateTime';
export declare class Client {
    accumulate(dataBuilder?: any, defaultValue?: number): void;
    constructor();
    deleteMetric(tableName?: string, metricName?: string): void;
    deleteSeries(gr?: GlideRecord, metricName?: string): void;
    getSeries(gr?: GlideRecord, metricName?: string, lastUpdated?: GlideDateTime): NativeArray;
    put(dataBuilder?: any): void;
    transform(o1?: any, o2?: any, o3?: any): NativeObject;
}
