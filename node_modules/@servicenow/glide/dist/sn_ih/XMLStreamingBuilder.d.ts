import { Context } from '../imports/Context';
import { Function } from '../imports/Function';
import { XMLStreamingAPI } from '../imports/XMLStreamingAPI';
import { GlideDateTime } from '../imports/GlideDateTime';
export declare class XMLStreamingBuilder {
    build(): XMLStreamingAPI;
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean);
    expiresAt(expireAt?: GlideDateTime): XMLStreamingBuilder;
    withAttachment(): XMLStreamingBuilder;
}
