import { Context } from '../imports/Context';
import { NativeArray } from '../imports/NativeArray';
import { Function } from '../imports/Function';
export declare class Preferences {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean);
    getDestinations(): NativeArray;
    getDestinationsByChannel(channelObj?: any): NativeArray;
    getUserGlobalPreference(): boolean;
    setNotificationPreference(notificationSysId?: string, send?: boolean): boolean;
    setUserGlobalPreference(send?: boolean): boolean;
}
