import { Context } from '../imports/Context';
import { Function } from '../imports/Function';
import { GlideRecord } from '../imports/GlideRecord';
export declare class PreferenceDestination {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean);
    getChannel(): GlideRecord;
    getDeliverTo(): string;
    getDestinationType(): GlideRecord;
    isActive(notificationObj?: any): boolean;
    isOverridden(notificationObj?: any): boolean;
    setActive(arg1?: any, arg2?: any): void;
}
