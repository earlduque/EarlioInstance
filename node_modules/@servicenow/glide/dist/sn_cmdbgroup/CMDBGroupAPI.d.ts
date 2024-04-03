import { Context } from '../imports/Context';
import { Function } from '../imports/Function';
export declare class CMDBGroupAPI {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean);
    static enqueueEvent(groupSysId?: string, operation?: string): void;
    static generateEvents(): void;
    static getAllCI(groupSysId?: string, requireCompleteSet?: boolean, requireAllQueryNodesCis?: boolean): string;
    static getAllCIFromQueryBuilder(groupSysId?: string, requireCompleteSet?: boolean, requireAllQueryNodesCis?: boolean): string;
    static getEventQueue(): string;
    static getManualCIList(groupSysId?: string, requireCompleteSet?: boolean): string;
    static getSavedQueryIdList(groupSysId?: string, requireCompleteSet?: boolean): string;
    static setManualCIList(groupSysId?: string, ciSysIds?: string): string;
    static setSavedQueryIdList(groupSysId?: string, queryIds?: string): string;
}
