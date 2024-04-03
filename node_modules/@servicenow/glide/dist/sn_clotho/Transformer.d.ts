import { Context } from '../imports/Context';
import { Function } from '../imports/Function';
export declare class Transformer {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean);
    getRow(): Record<any, any>;
    transform(): boolean;
}
