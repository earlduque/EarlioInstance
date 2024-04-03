import { Scriptable } from '../imports/Scriptable';
export declare class DiscoveryAPI {
    static createPageCountRecordForPatternExecution(outputEccId?: string, discoveryStatus?: string): string;
    static discoverIpAddress(ipAddress?: any, application?: any, source?: any): Scriptable;
    static getMidServerFromSchedule(scheduler?: string): string;
    static reportCiIpAddressStatus(ipAddress?: any, discoveryStatusSysId?: any): Scriptable;
    static reportCiStatus(discoveryStatusSysId?: any): Scriptable;
}
