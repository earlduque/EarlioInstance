import { JSONObject } from '../imports/JSONObject';
import { MultiElementUUID } from '../imports/MultiElementUUID';
export declare class PASnapshot {
    static getCompareIDs(uuidString?: string, dateStr1?: string, dateStr2?: string, type?: string): string;
    static getCompareQuery(uuidString?: string, dateStr1?: string, dateStr2?: string, type?: string, breakdown?: string, elements?: string, filteredBreakdown?: string, elementsFilter?: string): string;
    static getEncodedComparedQuery(uuidString?: string, dateStr1?: string, dateStr2?: string, type?: string): string;
    static getEncodedQuery(uuidString?: string, dateStr?: string, breakdown?: string, elements?: string, filteredBreakdown?: string, elementsFilter?: string): string;
    static getEncodedQueryWithMultiUUID(multiElementUUID?: MultiElementUUID, dateStr?: string): JSONObject;
    static getIDs(uuidString?: string, dateStr?: string, breakdown?: string, elements?: string, filteredBreakdownId?: string, elementsFilterId?: string): string;
    static getQuery(uuidString?: string, dateStr?: string, breakdown?: string, elements?: string, filteredBreakdown?: string, elementsFilter?: string): string;
    static getRecordsForDateRange(uuidString?: string, fromDateStr?: string, toDateStr?: string): string;
    static getSysIDs(indicatorSysID?: string, periodStr?: string, breakdownSysID?: string, elementSysID?: string, breakdownLevel2SysID?: string, elementLevel2SysID?: string, aggregateSysID?: string): string;
}
