import { Scriptable } from '../imports/Scriptable';
export declare class ReportCiStatusOutputJS {
    getCiOperationStatus(): Scriptable;
    getCmdbCI(): Scriptable;
    getDiscoveryState(): Scriptable;
    getIpAddress(): Scriptable;
    getIssues(): number;
    getIssuesLink(): Scriptable;
    toJson(): Scriptable;
    constructor();
}
