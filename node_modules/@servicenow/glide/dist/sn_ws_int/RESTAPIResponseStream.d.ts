import { Context } from '../imports/Context';
import { Function } from '../imports/Function';
export declare class RESTAPIResponseStream {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean);
    writeStream(inputStream?: any): void;
    writeString(stringToWrite?: string): void;
}
