import { Context } from '../imports/Context';
import { Function } from '../imports/Function';
import { GlideRecord } from '../imports/GlideRecord';
import { Scriptable } from '../imports/Scriptable';
export declare class NotifyScoped {
    static call(cx?: Context, scope?: Scriptable, args?: any[], funObj?: Function): void;
    static conferenceCall(context?: Context, scope?: Scriptable, args?: any[], funObj?: Function): GlideRecord;
    constructor(cx?: Context, args?: any[], funObj?: Function, inNewExpr?: boolean);
    static dequeueCall(context?: Context, scope?: Scriptable, args?: any[], funObj?: Function): void;
    static forwardCall(context?: Context, scope?: Scriptable, args?: any[], funObj?: Function): void;
    static getAvailableClients(context?: Context, scope?: Scriptable, args?: any[], funObj?: Function): GlideRecord;
    static getParentCallID(context?: Context, scope?: Scriptable, args?: any[], funObj?: Function): string;
    static getPhoneNumbers(cx?: Context, scope?: Scriptable, args?: any[], funObj?: Function): Array<any>;
    static getShortCodes(cx?: Context, scope?: Scriptable, args?: any[], funObj?: Function): Array<any>;
    static getTokenTTL(owner?: string): string;
    static getTokens(context?: Context, scope?: Scriptable, args?: any[], funObj?: Function): string;
    static hasCapability(cx?: Context, scope?: Scriptable, args?: any[], funObj?: Function): boolean;
    static kick(context?: Context, scope?: Scriptable, args?: any[], funObj?: Function): void;
    static modifyCall(context?: Context, scope?: Scriptable, args?: any[], funObj?: Function): void;
    static mute(context?: Context, scope?: Scriptable, args?: any[], funObj?: Function): void;
    static queueCall(context?: Context, scope?: Scriptable, args?: any[], funObj?: Function): void;
    static sendBulkSMS(cx?: Context, scope?: Scriptable, args?: any[], funObj?: Function): string;
    static sendSMS(cx?: Context, scope?: Scriptable, args?: any[], funObj?: Function): string;
    static unmute(context?: Context, scope?: Scriptable, args?: any[], funObj?: Function): void;
}
