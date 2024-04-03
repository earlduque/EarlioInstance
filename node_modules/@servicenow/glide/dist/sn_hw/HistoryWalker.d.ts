import { Context } from '../imports/Context';
import { Function } from '../imports/Function';
import { ScriptableObject } from '../imports/ScriptableObject';
import { Scriptable } from '../imports/Scriptable';
export declare class HistoryWalker {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean);
    getUpdateNumber(): number;
    getWalkedRecord(): ScriptableObject;
    getWalkedRecordCopy(): ScriptableObject;
    isFieldLevelSecurity(): boolean;
    isRecordLevelSecurity(): boolean;
    isWithChanges(): boolean;
    isWithJournalFields(): boolean;
    isWithSysFields(): boolean;
    isWithVariables(): boolean;
    printTimings(): void;
    static setFieldLevelSecurity(cx?: Context, thisObj?: Scriptable, args?: any[], funObj?: Function): void;
    static setRecordLevelSecurity(cx?: Context, thisObj?: Scriptable, args?: any[], funObj?: Function): void;
    static setWithChanges(cx?: Context, thisObj?: Scriptable, args?: any[], funObj?: Function): void;
    static setWithJournalFields(cx?: Context, thisObj?: Scriptable, args?: any[], funObj?: Function): void;
    static setWithSysFields(cx?: Context, thisObj?: Scriptable, args?: any[], funObj?: Function): void;
    static setWithVariables(cx?: Context, thisObj?: Scriptable, args?: any[], funObj?: Function): void;
    walkBackward(): boolean;
    walkForward(): boolean;
    static walkTo(cx?: Context, thisObj?: Scriptable, args?: any[], funObj?: Function): boolean;
}
