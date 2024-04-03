import { Context } from '../imports/Context';
import { Function } from '../imports/Function';
import { Scriptable } from '../imports/Scriptable';
export declare class ScopedDCManager {
    static addClassification(cx?: Context, thisObj?: Scriptable, args?: any[], funObj?: Function): string;
    static classify(cx?: Context, thisObj?: Scriptable, args?: any[], funObj?: Function): string;
    static clearClassification(cx?: Context, thisObj?: Scriptable, args?: any[], funObj?: Function): string;
    constructor(cx?: Context, args?: any[], funObj?: Function, inNewExpr?: boolean);
    static getAllDataClasses(cx?: Context, thisObj?: Scriptable, args?: any[], funObj?: Function): string;
    static getClassification(cx?: Context, thisObj?: Scriptable, args?: any[], funObj?: Function): string;
}
