import { Context } from '../imports/Context';
import { Function } from '../imports/Function';
import { GlideDateTime } from '../imports/GlideDateTime';
import { JSONStreamingAPI } from '../imports/JSONStreamingAPI';
export declare class JSONStreamingBuilder {
    build(): JSONStreamingAPI;
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean);
    expiresAt(expireAt?: GlideDateTime): JSONStreamingBuilder;
    withAttachment(): JSONStreamingBuilder;
}
